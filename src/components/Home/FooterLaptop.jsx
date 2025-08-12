import React from "react";

import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";

const FooterLaptop = () => {
  return (
    <div>
      <div className="flex gap-[15vw]">
        <div>
          <h1 className="text-black font-bold my-1">Useful Links</h1>
          <div className="grid grid-rows-6 grid-cols-3 gap-x-[6vw] gap-y-1">
            <p className="cursor-pointer">Blog</p>
            <p className="cursor-pointer">Privacy</p>
            <p className="cursor-pointer">Terms</p>
            <p className="cursor-pointer">FAQs</p>
            <p className="cursor-pointer">Security</p>
            <p className="cursor-pointer">Blog</p>
            <p className="cursor-pointer">Blog</p>
            <p className="cursor-pointer">Privacy</p>
            <p className="cursor-pointer">Terms</p>
            <p className="cursor-pointer">FAQs</p>
            <p className="cursor-pointer">Security</p>
            <p className="cursor-pointer">Blog</p>
            <p className="cursor-pointer">Security</p>
            <p className="cursor-pointer">Blog</p>
          </div>
        </div>
        <div>
          <div className="flex gap-2 my-1">
            <p className="font-bold ">Categories</p>
            <p className="text-green-700 cursor-pointer">See all</p>
          </div>
          <div className="grid grid-cols-3 gap-x-[7vw] gap-y-1">
            <p className="cursor-pointer">Vegetables & Fruits</p>
            <p className="cursor-pointer">Dairy & Breakfast</p>
            <p className="cursor-pointer">Munchies</p>
            <p className="cursor-pointer">Paan corner</p>
            <p className="cursor-pointer">Pharma & Wellness</p>
            <p className="cursor-pointer">Vegetables & Fruits</p>
            <p className="cursor-pointer">Dairy & Breakfast</p>
            <p className="cursor-pointer">Munchies</p>
            <p className="cursor-pointer">Paan corner</p>
            <p className="cursor-pointer">Pharma & Wellness</p>
            <p className="cursor-pointer">Vegetables & Fruits</p>
            <p className="cursor-pointer">Dairy & Breakfast</p>
            <p className="cursor-pointer">Munchies</p>
            <p className="cursor-pointer">Paan corner</p>
            <p className="cursor-pointer">Pharma & Wellness</p>
            <p className="cursor-pointer">Vegetables & Fruits</p>
            <p className="cursor-pointer">Dairy & Breakfast</p>
            <p className="cursor-pointer">Munchies</p>
            <p className="cursor-pointer">Paan corner</p>
            <p className="cursor-pointer">Pharma & Wellness</p>
            <p className="cursor-pointer">Vegetables & Fruits</p>
            <p className="cursor-pointer">Dairy & Breakfast</p>
            <p className="cursor-pointer">Munchies</p>
            <p className="cursor-pointer">Paan corner</p>
            <p className="cursor-pointer">Pharma & Wellness</p>
            <p className="cursor-pointer">Vegetables & Fruits</p>
            <p className="cursor-pointer">Dairy & Breakfast</p>
            <p className="cursor-pointer">Munchies</p>
            <p className="cursor-pointer">Paan corner</p>
            <p className="cursor-pointer">Pharma & Wellness</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-[5rem] my-[2rem]  h-[8vh] items-center bg-gray-50">
        <p className="text-gray-400 text-[12px]">
          © Blink Commerce Private Limited, 2016-2025
        </p>

        <div className="flex gap-[1rem]">
          <FaFacebook className="text-3xl" />

          <FaSquareXTwitter className="text-3xl" />
          <FaInstagramSquare className="text-3xl" />
          <FaLinkedin className="text-3xl" />
          <FaSquareThreads className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default FooterLaptop;
