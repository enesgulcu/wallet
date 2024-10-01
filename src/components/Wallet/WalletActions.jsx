"use client";
import { RiArrowRightWideLine, RiArrowLeftWideLine } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";
import { useState } from "react";
import CardMain from "./CardMain";

import ActionStep from "./ActionStep";
import Amount from "./Amount";

export default function WalletActions() {
  const [showSelectedAction, setShowSelecetedAction] = useState(""); //deposit/withdraw
  const [amount, setAmount] = useState("");
  const [ifSavedCardUsed, setIfSavedCardUsed] = useState(false);

  const [actionStep, setActionStep] = useState(0); // işlem basamağı

  const Balance = () => {
    return (
      <div className="text-center">
        <h2 className="text-xl font-semibold text-purple-800">
          Cüzdan Bakiyem
        </h2>
        <div className="text-5xl font-bold mt-2 text-purple-900">0 TL</div>
        <div className="text-xs text-gray-500 mt-1">
          Hesap numarası: 32507319
        </div>
      </div>
    );
  };
  const ActionButtons = () => {
    return (
      <div className="flex justify-around mt-6">
        <div className="flex flex-col items-center">
          <button
            onClick={() => {
              setShowSelecetedAction("deposit");
              setActionStep(1);
            }}
            className="bg-purple-600 text-white p-3 rounded-lg   shadow "
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.9167 6.04166C21.9167 2.75097 19.249 0.0833282 15.9583 0.0833282C12.6676 0.0833282 10 2.75097 10 6.04166C10 9.33236 12.6676 12 15.9583 12C19.249 12 21.9167 9.33236 21.9167 6.04166ZM16.5007 6.58334L16.5012 9.29484C16.5012 9.594 16.2587 9.83651 15.9595 9.83651C15.6604 9.83651 15.4179 9.594 15.4179 9.29484L15.4174 6.58334H12.7036C12.4047 6.58334 12.1624 6.34082 12.1624 6.04167C12.1624 5.74252 12.4047 5.5 12.7036 5.5H15.4172L15.4167 2.79024C15.4167 2.49109 15.6592 2.24857 15.9583 2.24857C16.2575 2.24857 16.5 2.49109 16.5 2.79024L16.5005 5.5H19.2046C19.5035 5.5 19.7458 5.74252 19.7458 6.04167C19.7458 6.34082 19.5035 6.58334 19.2046 6.58334H16.5007ZM18.6667 18.7708V12.5437C19.2526 12.2993 19.7985 11.978 20.2917 11.5925V18.7708C20.2917 20.4162 18.9578 21.75 17.3125 21.75H3.77083C1.82633 21.75 0.25 20.1737 0.25 18.2292V4.95833C0.25 4.92483 0.252027 4.8918 0.255966 4.85937C0.252011 4.80259 0.25 4.74528 0.25 4.68749C0.25 3.3413 1.34131 2.24999 2.6875 2.24999H10.0236C9.70236 2.75181 9.44299 3.29707 9.25629 3.87499H2.6875C2.23877 3.87499 1.875 4.23876 1.875 4.68749C1.875 5.13623 2.23877 5.49999 2.6875 5.49999H8.93719C8.92359 5.67877 8.91667 5.85941 8.91667 6.04166C8.91667 6.41007 8.94496 6.77186 8.99949 7.12499H2.6875C2.40261 7.12499 2.12913 7.07612 1.875 6.9863V18.2292C1.875 19.2762 2.72379 20.125 3.77083 20.125H17.3125C18.0604 20.125 18.6667 19.5187 18.6667 18.7708ZM14.6042 13.0833C14.1554 13.0833 13.7917 13.4471 13.7917 13.8958C13.7917 14.3446 14.1554 14.7083 14.6042 14.7083H16.7708C17.2196 14.7083 17.5833 14.3446 17.5833 13.8958C17.5833 13.4471 17.2196 13.0833 16.7708 13.0833H15.9583H14.6042Z"
                fill="white"
              ></path>
            </svg>
          </button>
          <span className="mt-1 text-sm text-purple-600 font-medium">
            Yükle
          </span>
        </div>

        <div className="flex flex-col items-center">
          <button
            onClick={() => {
              setShowSelecetedAction("withdraw");
              setActionStep(1);
            }}
            className="bg-purple-600 text-white p-3 rounded-lg shadow"
          >
            <GrTransaction size={24} />
          </button>
          <span className="mt-1 text-sm text-purple-600 font-medium">Çek</span>
        </div>
      </div>
    );
  };
  const LastActions = () => {
    return (
      <div className="mt-10 mx-auto max-w-xl ">
        <div className="flex justify-between">
          <h3 className="font-semibold text-lg text-black">Son İşlemlerim</h3>
          <a className="underline decoration-1 text-purple-900" href="">
            Tümü
          </a>
        </div>
        <ul className="mt-4 shadow border rounded-lg divide-y">
          <li className="">
            <button className="w-full flex p-4  justify-between items-center text-sm ">
              <span className="flex justify-center items-center gap-x-5">
                <span>icon</span>
                <span className="flex flex-col gap-y-3">
                  <span className="font-medium">Bakiye Yüklendi </span>
                  <span className="text-xm">Bakiye Yüklendi </span>
                </span>
              </span>
              <span className="flex justify-center items-center gap-x-5">
                <span className="flex flex-col gap-y-1">
                  <span className="text-green-600 font-medium">+800,00 TL</span>
                  <div className="">10 Eylül</div>
                </span>
                <span className="p-1">
                  <RiArrowRightWideLine size={24} />
                </span>
              </span>
            </button>
          </li>
          <li className="">
            <button className="w-full flex p-4  justify-between items-center text-sm">
              <span className="font-medium">Hizmet satın alındı </span>
              <span className="flex justify-center items-center gap-x-5">
                <span className="flex flex-col gap-y-1">
                  <span className="text-red-600 font-medium">-100,00 TL</span>
                  <div className="">19 Ekim</div>
                </span>
                <span className="p-1">
                  <RiArrowRightWideLine size={24} />
                </span>
              </span>
            </button>
          </li>
          <li className="">
            <button className="w-full flex p-4  justify-between items-center text-sm">
              <span className="font-medium">Hizmet satın alındı </span>
              <span className="flex justify-center items-center gap-x-5">
                <span className="flex flex-col gap-y-1">
                  <span className="text-red-600 font-medium">-800,00 TL</span>
                  <div className="">1 Eylül</div>
                </span>
                <span className="p-1">
                  <RiArrowRightWideLine size={24} />
                </span>
              </span>
            </button>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div className="md:p-6 p-2  bg-white rounded-lg md:shadow-md">
      {actionStep === 0 ? (
        <div>
          <Balance />
          <ActionButtons />
          <LastActions />
        </div>
      ) : actionStep === 1 ? (
        <div>
          <CardMain
            ifSavedCardUsed={ifSavedCardUsed}
            setIfSavedCardUsed={setIfSavedCardUsed}
            showSelectedAction={showSelectedAction}
            updateActionStep={setActionStep}
          />
        </div>
      ) : actionStep === 2 ? (
        <div>
          {showSelectedAction === "deposit" ? (
            <ActionStep
              setActionStep={setActionStep}
              setIfSavedCardUsed={setIfSavedCardUsed}
              actionType={"deposit"}
            />
          ) : (
            <ActionStep
              setActionStep={setActionStep}
              setIfSavedCardUsed={setIfSavedCardUsed}
              actionType={"withdraw"}
            />
          )}
        </div>
      ) : actionStep === 3 ? (
        <Amount
          setIfSavedCardUsed={setIfSavedCardUsed}
          ifSavedCardUsed={ifSavedCardUsed}
          setAmount={setAmount}
          showSelectedAction={showSelectedAction}
          setActionStep={setActionStep}
          amount={amount}
        />
      ) : (
        ""
      )}
    </div>
  );
}
