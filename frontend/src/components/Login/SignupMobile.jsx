import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";

import { IoIosArrowRoundBack } from "react-icons/io";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import blinkitLogo from "../../assets/blinkit_logo2.png";

const SignupMobile = ({ isSignup, setIsSignup }) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  //function for submittinf form
  const onSubmit = async (data) => {
    console.log(data);
    const response = await fetch("http://localhost:8000/signup", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log("Form submission successful:", result);
    if (result.msg == "success") {
      setIsSignup(false);
    }
    reset();
  };
  const password = watch("password");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmpassword, setShowConfirmpassword] = useState(false);

  const togglePasswordVissibility = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisiblilty = (e) => {
    e.preventDefault();
    setShowConfirmpassword(!showConfirmpassword);
  };

  return (
    <div>
      <div className="inset-0 fixed bg-gray-800/50 backdrop-blur-[1px] z-[100] flex justify-center ">
        <div className="h-[100vh] w-[90vw] md:w-[34rem] md:h-[37rem] flex md:mt-10 flex-col items-center p-4  gap-1.5  bg-white rounded-lg sm:relative overflow-y-auto">
          <div className="flex md:relative">
            <IoIosArrowRoundBack className="text-2xl text-black absolute md:-left-50 sm:absolute left-4 border rounded-full md:border-none cursor-pointer " />
            <img
              src={blinkitLogo}
              alt="blinkit_Logo"
              className="h-[4rem] w-[4rem]"
            />
          </div>
          {/* --------form starts--------- */}
          <form onSubmit={handleSubmit(onSubmit)} method="post">
            <div className="flex gap-5 flex-col mt-0 md:mt-2 md:w-[32rem]">
              <div className="flex flex-col gap-6 md:gap-2  items-center md:flex-row md:justify-center ">
                <div className="flex flex-col relative gap-1 ">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="border-gray-600 border-2 rounded-md p-1 w-[80vw] md:w-[13rem]  placeholder-gray-400"
                    {...register("firstName", {
                      required: true,
                      maxLength: 20,
                      minLength: 3,
                      pattern: /^[A-Za-z]+$/i,
                    })}
                  />
                  {errors.firstName && (
                    <p className="text-red-600 text-[10px] bg-amber-100 w-fit mt-10 absolute">
                      *Please check the First Name
                    </p>
                  )}
                </div>
                {/* --------last name------------- */}
                <div className="flex flex-col relative">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="border-gray-600 border-2 rounded-md p-1 w-[80vw] md:w-[13rem]  placeholder-gray-400"
                    {...register("lastName", {
                      required: true,
                      maxLength: 20,
                      minLength: 3,
                      pattern: /^[A-Za-z]+$/i,
                    })}
                  />
                  {errors.lastName && (
                    <p className="text-red-600 text-[10px] bg-amber-100 w-fit md:mt-9 absolute mt-9">
                      *Please check the Last Name
                    </p>
                  )}
                </div>
              </div>
              {/* -------email phone no------------- */}
              <div className="flex flex-col md:gap-2 gap-4 items-center  md:flex-row md:justify-center relative">
                <div className="flex flex-col">
                  <input
                    type="email"
                    placeholder="Email"
                    className="border-gray-600 border-2 rounded-md p-1 w-[80vw] md:w-[13rem] placeholder-gray-400"
                    {...register("email", {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-600 text-[10px] bg-amber-100 w-fit mt-9 absolute">
                      *Enter correct email
                    </p>
                  )}
                </div>
                <div className="flex flex-col ">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="border-gray-600 border-2 rounded-md p-1 w-[80vw] md:w-[13rem] placeholder-gray-400"
                    {...register("contactNumber", {
                      required: {
                        value: true,
                        message: "*Phone no is required ",
                      },
                      pattern: {
                        value: /^\d{10}$/, // Example: 10-digit number
                        message:
                          "Invalid phone number format (e.g., 1234567890)",
                      },
                    })}
                  />
                  {errors.contactNumber && (
                    <p className="text-red-600 text-[10px] bg-amber-100 w-fit mt-9 absolute">
                      {errors.contactNumber.message}
                    </p>
                  )}
                </div>
              </div>
              {/* ---------city & state----------------- */}
              <div className="flex md:gap-2 gap-5 flex-col  items-center  md:flex-row md:justify-center relative">
                <select
                  name="city"
                  id="city"
                  placeholder="City"
                  className="border-gray-600 border-2 rounded-md p-1 w-[80vw] md:w-[13rem] placeholder-gray-400"
                  {...register("city", { required: true })}
                >
                  <option value="" className="text-gray-400">
                    City
                  </option>
                  <option value="Hisar" className="">
                    Hisar
                  </option>
                  <option value="Gurugram">Gurugram</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Noida">Noida</option>
                </select>
                {errors.city && (
                  <p className="text-red-600 text-[10px] bg-amber-100 w-fit md:mt-12 mt-9 md:left-12 left-0 absolute">
                    *Select a city
                  </p>
                )}
                {/* --------------------------- */}
                <select
                  name="state"
                  id="state"
                  placeholder="state"
                  className="border-gray-600 border-2 rounded-md p-1 w-[80vw] md:w-[13rem] placeholder-gray-400"
                  {...register("state", { required: true })}
                >
                  <option value="" className="text-gray-400">
                    State
                  </option>
                  <option value="Haryana" className="">
                    Haryana
                  </option>
                  <option value="Punjab">Punjab</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="Hyderabad">Hyderabad</option>
                </select>
                {errors.state && (
                  <p className="text-red-600 text-[10px] bg-amber-100 w-fit md:mt-12 md:left-65 left-0 mt-22 absolute">
                    *Select a state
                  </p>
                )}

                {/* <input
                  type="text"
                  placeholder="State"
                  className="border-gray-600 border-2 rounded-md p-1 w-[80vw] md:w-[13rem] placeholder-gray-400"
                /> */}
              </div>
              {/* ---------pin code----------- */}
              <div className="flex md:gap-2 gap-5 flex-col  items-center  md:flex-row md:justify-center relative ">
                <input
                  type="number"
                  placeholder="Pin Code"
                  className="border-gray-600 border-2 rounded-md p-1 w-[80vw] placeholder-gray-400 md:w-[13rem]"
                  {...register("pinCode", {
                    required: true,
                  })}
                />
                {errors.pinCode && (
                  <p className="text-red-600 text-[10px] bg-amber-100 w-fit md:mt-9 md:left-12 left-0 mt-9 absolute">
                    *Please check pin code
                  </p>
                )}
                {/* ------------------role0--------------------------------- */}
                <select
                  name="role"
                  id="role"
                  className="border-gray-600 border-2 rounded-md p-1 w-[80vw] md:w-[13rem] placeholder-gray-400"
                  {...register("role", { required: true })}
                >
                  <option value="" className="text-gray-400">
                    Select Role
                  </option>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
                {errors.role && (
                  <p className="text-red-600 text-[10px] bg-amber-100 w-fit md:mt-12 md:left-65 left-0 mt-22 absolute">
                    *Select a role
                  </p>
                )}
              </div>
              {/* ----------address------------ */}
              <div className="flex justify-center relative ">
                <textarea
                  name=""
                  id=""
                  placeholder="Address"
                  className="border-gray-600 border-2 w-[80vw] rounded-md p-1 placeholder-gray-400 md:w-[26.5rem]"
                  {...register("address", {
                    required: true,
                  })}
                ></textarea>
                {errors.address && (
                  <p className="text-red-600 text-[10px] bg-amber-100 w-fit md:mt-15 absolute md:left-12 left-0 mt-15">
                    *Please check address
                  </p>
                )}
              </div>
              {/* ----------password--------------- */}
              <div className="flex md:gap-2 gap-6 flex-col justify-center items-center md:flex-row md:justify-center ">
                <div className="flex border-gray-600 border-2 rounded-md p-1 md:w-[13rem] w-[80vw] relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className=" outline-none border-none placeholder-gray-400 "
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
                  />
                  {errors.password && (
                    <p className="text-red-600 text-[10px] bg-amber-100 w-fit md:mt-9 absolute md:left-0 left-0 mt-9">
                      {errors.password.message}
                    </p>
                  )}
                  <span className="mt-1 cursor-pointer">
                    <button type="button" onClick={togglePasswordVissibility}>
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </span>
                </div>
                {/* --------confirm password-------------- */}
                <div className=" flex border-gray-600 border-2 rounded-md p-1 md:w-[13rem] w-[80vw] relative">
                  <input
                    type={showConfirmpassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    className=" outline-none border-none placeholder-gray-400 "
                    {...register("confirmPassword", {
                      required: { value: true, message: "*Enter this field" },
                      validate: (value) =>
                        value === password || "Passwords do not match ",
                    })}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-600 text-[10px] bg-amber-100 w-fit md:mt-9 absolute md:left-0 left-0 mt-9">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                  <span className="mt-1 cursor-pointer">
                    <button
                      type="button"
                      onClick={toggleConfirmPasswordVisiblilty}
                    >
                      {showConfirmpassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </span>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  disabled={isSubmitting}
                  className="bg-green-700 text-white font-bold p-2 px-4 rounded-sm cursor-pointer hover:bg-green-600"
                >
                  Sign Up
                </button>
              </div>
              <div className="flex justify-center">
                <p className="text-[12px] text-gray-500 font-normal -mt-3 ">
                  By continuing, you agree to our Terms of service & Privacy
                  policy
                </p>
              </div>
              <div className="flex justify-center">
                <p className="text-[13px]">
                  Already have an account{" "}
                  <span className="text-blue-500 underline cursor-pointer ">
                    LOGIN?
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupMobile;
