import React from "react";
import { IoIosHeart } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="font-bold text-[11vw] text-gray-200 font-serif my-6 ">
        <div>India's last</div>
        <div className="flex ">
          minute app
          <p>
            <IoIosHeart className="text-red-400 mt-3 " />
          </p>
        </div>
      </div>
      <div className="border-t-1 border-gray-300 border-b-1 h-[14vh] text-gray-300 font-bold">
        <div className="mt-3 text-[4vw]">blinkit</div>
      </div>
      <div>
        <div className="flex justify-between my-2 font-medium text-gray-500">
          <p>India's last minute app - blinkit</p>
          <p>
            <FaPlus className="mt-1" />
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
