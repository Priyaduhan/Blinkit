import React from "react";
import blinkitLogo from "../../assets/blinkit_Logo2.png";
import { IoIosArrowRoundBack } from "react-icons/io";

const Login = () => {
  return (
    <div className="inset-0 fixed bg-gray-800/50 backdrop-blur-[1px] z-[100] flex justify-center ">
      <div className="h-[42vh] w-[35vw] flex flex-col items-center p-4 mt-[30vh] gap-2  bg-white rounded-lg">
        <div className="flex relative">
          <IoIosArrowRoundBack className="text-2xl text-black absolute -left-50 cursor-pointer " />
          <img
            src={blinkitLogo}
            alt="blinkit_Logo"
            className="h-[4rem] w-[4rem] "
          />
        </div>
        <p className="font-bold text-[24px] font-sans">
          India's Last minute app
        </p>
        <p className="text-[16px]">Login or Signup</p>
        <div className="flex items-center border border-gray-300 rounded-lg px-2 py-2 w-[16rem]">
          <span className="font-medium">+91</span>
          <input
            type="tel"
            placeholder="Enter mobile number"
            className="ml-2  outline-none border-none w-full placeholder-gray-400  text-black font-medium"
          />
        </div>
        <button className="w-[16rem] bg-gray-600 text-white p-2 rounded-md cursor-pointer">
          Continue
        </button>
        <p className="text-[12px] text-gray-500 font-normal mt-3">
          By continuing, you agree to our Terms of service & Privacy policy
        </p>
      </div>
    </div>
  );
};

export default Login;
