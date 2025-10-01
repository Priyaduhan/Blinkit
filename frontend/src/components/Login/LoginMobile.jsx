import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import blinkitLogo from "../../assets/blinkit_logo2.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const LoginMobile = ({
  isSignup,
  setIsSignup,
  isLogin,
  setIsLogin,
  setRole,
}) => {
  // const [loginUsingEmail, setLoginUsingEmail] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    watch,

    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // console.log(data.password);
    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          role: data.role,
        }),
      });

      const result = await response.json();
      console.log("result is ", result);
      console.log("access token is ", result.accessToken);

      if (result.msg == "success") {
        // localStorage.setItem("token", result.accessToken);

        setIsLogin(true);
        setRole(result.role);
        if (result.role == "admin") {
          navigate("/admin");
        } else {
          // console.log("there is some error");
          navigate("/");
          console.log("welcome to home page");
        }
      } else {
        console.log("there is error in login");
      }
    } catch (error) {
      console.log("error in login", error);
    }
  };

  return (
    <div className="inset-0 fixed bg-gray-800/50 backdrop-blur-[1px] z-[100] flex justify-center ">
      <div className="h-[50vh] w-full flex flex-col items-center p-4 mt-86 gap-2 md:h-[24rem] md:w-[30rem] md:mt-[30vh] md:gap-2  bg-white rounded-lg relative">
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
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* ----input of mobile no----------- */}
          {/* {loginUsingEmail == false && (
            <div className="flex flex-col gap-3">
              <div className="flex items-center border border-gray-300 rounded-lg px-2 py-2 w-[70vw] md:w-[16rem]">
                <span className="font-medium">+91</span>
                <input
                  {...register("contactNumber", {
                    required: {
                      value: true,
                      message: "*Phone no is required ",
                    },
                    pattern: {
                      value: /^\d{10}$/, // Example: 10-digit number
                      message: "Invalid phone number format (e.g., 1234567890)",
                    },
                  })}
                  type="tel"
                  placeholder="Enter mobile number"
                  className="ml-2  outline-none border-none w-full placeholder-gray-400 placeholder:text-sm   text-black font-medium"
                />
                {errors.contactNumber && (
                  <p className="text-red-600 text-[10px] bg-amber-100 w-fit mt-9 absolute">
                    {errors.contactNumber.message}
                  </p>
                )}
              </div>
              <button className="w-[70vw] md:w-[16rem] bg-gray-600 text-white p-2 rounded-md cursor-pointer">
                Continue
              </button>
            </div>
          )} */}

          {/* --------------div for email & password------------ */}

          <div className="flex flex-col items-center gap-1.5   w-[70vw] md:w-[16rem]">
            <div className="border border-gray-300  rounded-lg px-2 py-2 w-full">
              <input
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                type="email"
                placeholder="Enter your email"
                className="ml-2  outline-none border-gray-300 w-full placeholder-gray-400 placeholder:text-sm   text-black font-medium"
              />
              {errors.email && (
                <p className="text-red-600 text-[10px] bg-amber-100 w-fit mt-9 absolute">
                  *Enter correct email
                </p>
              )}
            </div>
            <div className="border border-gray-300  rounded-lg px-2 py-2 w-full">
              <input
                {...register("password", {
                  required: "*Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/,
                    message:
                      "*Password must include uppercase, lowercase, number, and special character",
                  },
                })}
                type="password"
                placeholder="Enter your password"
                className="ml-2  outline-none border-gray-300 w-full placeholder-gray-400 placeholder:text-sm   text-black font-medium"
              />
              {errors.password && (
                <p className="text-red-600 text-[10px] bg-amber-100 w-fit md:mt-9 absolute md:left-0 left-0 mt-9">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button className="w-[70vw] md:w-[16rem] bg-gray-600 text-white p-2 rounded-md cursor-pointer">
              Login
            </button>
          </div>
        </form>

        <p className="text-[12px] text-gray-500 font-normal mt-3 text-center">
          By continuing, you agree to our Terms of service & Privacy policy
        </p>
        {/* <p
          className="text-[12px] text-blue-800 underline
         font-normal mt-1 text-center cursor-pointer"
          onClick={() => setLoginUsingEmail(!loginUsingEmail)}
        > */}
        {/* {loginUsingEmail
            ? "Login Using Mobile?"
            : " Login using email and password?"} */}
        {/* </p> */}
      </div>
    </div>
  );
};

export default LoginMobile;
