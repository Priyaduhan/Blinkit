import React from "react";
import blinkit_logo from "../../assets/blinkit_logo.webp";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const Navbar = ({
  isCartOpen,
  setIsCartOpen,
  isLogin,
  setIsLogin,
  toggleDrawer,
  TotalNoOfItems,
  grandTotal,
}) => {
  const handleLogout = async () => {
    await fetch("http://localhost:8000/logout", {
      method: "POST",
      credentials: "include",
    });
    setIsLogin(false);
  };

  return (
    <>
      <div>
        <div className="lg:flex justify-around mb-2 px-4  gap-4 bg-[#FFFFFF] border-gray-200 border-b-1 z-50 fixed mt-0 pt-0 w-full   ">
          {/* -------------blinkit logo------------ */}
          <div className="hidden lg:flex items-center">
            <img
              src={blinkit_logo}
              alt="blinkit_logo"
              className="h-[3rem]  w-[6rem] place-content-center"
            />
          </div>
          <div className="flex m-2 justify-between">
            {/* --------addresss--------------- */}
            <div>
              <p className="text-[16px]">Delivery in 15 minutes</p>
              <div className="flex">
                <p className="text-[13px]">
                  Sector 14, Hisar, Haryana 125011, India
                </p>
                <p>
                  <IoMdArrowDropdown />
                </p>
              </div>
            </div>
            {/* -----------user icon----------------- */}
            <div className="mt-2 text-2xl lg:hidden cursor-pointer">
              <FaRegUserCircle />
            </div>
          </div>
          {/* ---search icon------------------ */}
          <div className="flex justify-center mt-3 lg:grow ">
            <div className="relative w-full mx-3">
              <IoIosSearch className="absolute text-2xl mt-1 ml-1" />
              <input
                type="text"
                className="border h-[2.3rem] w-full rounded-sm border-gray-400 bg-gray-100 pl-8"
              />
            </div>
          </div>
          <div className="flex items-center  gap-6">
            <div className="hidden lg:flex w-[4rem]  place-content-center cursor-pointer ">
              {isLogin ? (
                <p onClick={() => handleLogout()}>Logout</p>
              ) : (
                <p>Login</p>
              )}
            </div>
            {TotalNoOfItems >= 1 ? (
              <div
                onClick={toggleDrawer(true)}
                className="  hidden lg:flex w-[7rem] h-[2.9rem] rounded-xl text-white items-center place-content-center gap-2 bg-green-700 hover:bg-green-600 font-bold cursor-pointer"
              >
                <IoCartOutline className="mt-1 text-2xl" />
                <div className="flex flex-col text-[13px] ">
                  <p className="">
                    {TotalNoOfItems}
                    {TotalNoOfItems > 1 ? " Items" : " Item"}
                  </p>
                  <p className="text-[13px]">Rs. {grandTotal}</p>
                </div>
              </div>
            ) : (
              <div
                onClick={toggleDrawer(true)}
                className="  hidden lg:flex w-[7rem] h-[3rem] items-center place-content-center gap-2 bg-gray-200 font-bold cursor-pointer"
              >
                <IoCartOutline className="mt-1 text-2xl" />
                <p>My Cart</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
