import { useState } from "react";
import BaseText from "../BaseText";
import { FaFacebook, FaEnvelopeOpen } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoIosCloseCircleOutline, IoIosArrowRoundBack } from "react-icons/io";
import { RiLock2Fill } from "react-icons/ri";

export default function Example({ open, setOpen }: any) {
  const [login, setLogin] = useState(false);
  const [continueBtn, setContinueBtn] = useState(false);

  const handleLogin = () => {
    setLogin(true);
  };

  const handleContinue = () => {
    setContinueBtn(true);
  };

  const handleOutsideClick = (e: any) => {
    if (e.target.id === "modal-overlay") {
      setOpen(false);
    }
  };

  return (
    open && (
      <div
        id="modal-overlay"
        onClick={handleOutsideClick}
        className="fixed inset-0 z-10 flex items-center justify-center bg-black/50 mt-14 overflow-hidden"
      >
        <div
          className="relative p-7 bg-white rounded-xl shadow-lg w-[360px] max-w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="items-center">
            <div
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-600 transition duration-200 text-2xl cursor-pointer"
              onClick={() => {
                setOpen(false);
              }}
            >
              <IoIosCloseCircleOutline size={30} />
            </div>
            {login && (
              <div
                className="absolute top-2 left-3 text-gray-500 hover:text-gray-600 transition duration-200 text-2xl cursor-pointer"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <IoIosArrowRoundBack size={35} />
              </div>
            )}
          </div>

          {/* Header */}
          {!login && (
            <>
              <div>
                <BaseText size="text-2xl" weight="font-semibold">
                  Welcome!
                </BaseText>
              </div>
              <BaseText size="text-sm" color="text-gray-600">
                Sign up or log in to continue
              </BaseText>

              {/* Social Buttons */}
              <div className="mt-6 space-y-4">
                <button
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-14 w-full px-4 py-3 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500"
                >
                  <FaFacebook className="text-lg " />
                  Continue with Facebook
                </button>
                <button
                  onClick={() => setOpen(false)}
                  className="flex items-center border gap-12 w-full px-4 py-3 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-200"
                >
                  <FcGoogle className="mr-3 text-lg" />
                  Continue with Google
                </button>
              </div>

              <div className=" text-center my-2">
                <span className="px-4 text-sm text-gray-500">or</span>
              </div>
              <div className="mt-4 space-y-4">
                <button
                  className="justify-center w-full px-4 py-3 text-sm font-medium text-white bg-[#e21b70] rounded-md  hover:bg-[#b92b69]"
                  onClick={handleLogin}
                >
                  Login
                </button>
                <button
                  onClick={handleLogin}
                  className="justify-center border border-black w-full px-4 py-3 text-sm font-medium text-gray-900 rounded-md  hover:bg-gray-200"
                >
                  Signup
                </button>
              </div>
              <div className="mt-3">
                <BaseText size="text-[13px]" color="text-gray-600">
                  By signing up, you agree to our
                  <span className="text-[#e21b70] font-medium">
                    {" "}
                    Terms and Conditions{" "}
                  </span>
                  and{" "}
                  <span className="text-[#e21b70] font-medium">
                    Privacy Policy
                  </span>
                  .
                </BaseText>
              </div>
            </>
          )}
          {login && !continueBtn && (
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
                  onClick={handleContinue}
                  className="justify-center border border-black w-full px-4 py-3 text-sm font-medium text-gray-900 rounded-md  hover:bg-gray-200"
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
        </div>
      </div>
    )
  );
}
