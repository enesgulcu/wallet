import { NextResponse } from "next/server";
import prisma from "../../prisma";
import logPaymentAttempt from "../services/logPaymentAttempt";

export const config = {
  matcher: ["/api/payment"],
};

// Transaction limits
const DAILY_PAYMENT_LIMIT = 5;
const MAX_AMOUNT = 10000;

export const validatePaymentMiddleware = async (request) => {
  const { userId, amount, transactionId, isPaymentVerified } =
    await request.json();

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    await logPaymentAttempt(userId, amount, transactionId, "User not found");
    return NextResponse.json({ status: 404, message: "User not found" });
  }

  // Fetch payment attempts made by the user today
  const todayPayments = await prisma.transaction.findMany({
    where: {
      walletId: user.walletId,
      type: "payment",
      createdAt: {
        gte: new Date(new Date().setHours(0, 0, 0, 0)), // Start of the day
        lt: new Date(new Date().setHours(23, 59, 59, 999)), // End of the day
      },
    },
  });

  // Check daily payment limit
  if (todayPayments.length >= DAILY_PAYMENT_LIMIT) {
    await logPaymentAttempt(userId, amount, transactionId, "Daily payment limit exceeded");
    return NextResponse.json({
      status: 403,
      message: "Daily payment limit exceeded",
    });
  }

  // Check maximum allowed payment amount
  if (amount > MAX_AMOUNT) {
    await logPaymentAttempt(
      userId,
      amount,
      transactionId,
      `Maximum transaction amount exceeded (Limit: ${MAX_AMOUNT} TL)`
    );
    return NextResponse.json({
      status: 403,
      message: `Maximum transaction amount exceeded (Limit: ${MAX_AMOUNT} TL)`,
    });
  }

  // Check if the payment has been verified through email or SMS.
  if (!isPaymentVerified) {
    await logPaymentAttempt(
      userId,
      amount,
      transactionId,
      "Payment not verified. Please verify the payment before sending request"
    );
    return NextResponse.json({
      status: 403,
      message:
        "Payment not verified. Please verify the payment before sending request",
    });
  }

  return NextResponse.next();
};
