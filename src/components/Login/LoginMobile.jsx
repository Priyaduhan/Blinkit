import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import blinkitLogo from "../../assets/blinkit_logo2.png";

const LoginMobile = ({ isSignup, setIsSignup }) => {
  return (
    <div className="inset-0 fixed bg-gray-800/50 backdrop-blur-[1px] z-[100] flex justify-center ">
      <div className="h-[50vh] w-full flex flex-col items-center p-4 mt-86 gap-2 md:h-[22rem] md:w-[30rem] md:mt-[30vh] md:gap-2 bg-white rounded-lg relative">
        <div className="flex md:relative">
          <IoIosArrowRoundBack className="border md:top-0.5 md:border-none md:-left-48 md:bg-none   text-2xl text-black absolute  rounded-full bg-white bottom-160 left-7 cursor-pointer w-7 h-7 shadow-gray-400 " />
          <img
            src={blinkitLogo}
            alt="blinkit_Logo"
            className="h-[4rem] w-[4rem] "
          />
        </div>
        <p className="font-bold text-[24px] font-sans">
          India's Last minute app
        </p>
        <p className="text-[16px]">
          Login or{" "}
          <span
            className="cursor-pointer hover:text-blue-700"
            onClick={() => setIsSignup(true)}
          >
            {" "}
            Signup
          </span>
        </p>
        <div className="flex items-center border border-gray-300 rounded-lg px-2 py-2 w-[70vw] md:w-[16rem]">
          <span className="font-medium">+91</span>
          <input
            type="tel"
            placeholder="Enter mobile number"
            className="ml-2  outline-none border-none w-full placeholder-gray-400 placeholder:text-sm   text-black font-medium"
          />
        </div>
        <button className="w-[70vw] md:w-[16rem] bg-gray-600 text-white p-2 rounded-md cursor-pointer">
          Continue
        </button>
        <p className="text-[12px] text-gray-500 font-normal mt-3 text-center">
          By continuing, you agree to our Terms of service & Privacy policy
        </p>
      </div>
    </div>
  );
};

export default LoginMobile;
