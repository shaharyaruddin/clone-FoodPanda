import React, { useState } from "react";
import { FaEnvelopeOpen } from "react-icons/fa6";
import { RiLock2Fill } from "react-icons/ri";
import BaseText from "../BaseText";

function UserForm() {
  const [continueBtn, setContinueBtn] = useState(false);

  const handleContinue = () => {
    setContinueBtn(true);
  };
  return (
    <>
      {!continueBtn && (
        <>
          <div className="mt-10">
            <FaEnvelopeOpen size={50} color="#e21b70" />
          </div>
          <div className="flex flex-col mt-5">
            <BaseText size="text-2xl" weight="font-semibold">
              What's your email?
            </BaseText>
            <BaseText size="text-sm" color="text-gray-600">
              We'll check if you have an account
            </BaseText>
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <input
              type="email"
              className="w-full px-4 py-2 outline-none border border-gray-300 rounded-md"
              placeholder="Email"
            />
            <button
              className="justify-center border border-black w-full px-4 py-3 text-sm font-medium text-gray-900 rounded-md  hover:bg-gray-200"
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
        </>
      )}
      {continueBtn && (
        <>
          <div>
            <div className="mt-10">
              <RiLock2Fill size={50} color="#e21b70" />
            </div>
            <div className="flex flex-col mt-5">
              <BaseText size="text-2xl" weight="font-semibold">
                Welcome back!
              </BaseText>
              <BaseText size="text-sm" color="text-gray-600">
                Log in by typing your password.
              </BaseText>
            </div>
            <div className="flex flex-col gap-5 mt-5">
              <input
                type="password"
                className="w-full px-4 py-2 outline-none border border-gray-300 rounded-md"
                placeholder="Password"
              />
              <button className="justify-center border border-black w-full px-4 py-3 text-sm font-medium text-gray-900 rounded-md  hover:bg-gray-200">
                Login in with Password
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default UserForm;
