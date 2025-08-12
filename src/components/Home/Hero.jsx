import React from "react";
import Footer from "./Footer";
import FooterLaptop from "./FooterLaptop";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//icons
import { LuTimer } from "react-icons/lu";
//images
import pan_corner from "../../assets/pan_corner.png";
import fruits2 from "../../assets/fruits2.webp";
import breakfast from "../../assets/breakfast.avif";
import munchies from "../../assets/munchies.avif";
import colddrink from "../../assets/colddrink.avif";
import instant_food from "../../assets/instant.avif";
import tea from "../../assets/tea.avif";
import bakery from "../../assets/bakery.avif";
import sweetTooth from "../../assets/chocolates.avif";
import atta from "../../assets/atta.jpeg";
import lays from "../../assets/chips.avif";

const Hero = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4, slidesToScroll: 4 },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 0 },
      },
      //   {
      //     breakpoint:

      //   }
    ],
  };
  return (
    <>
      <div className="mx-2 lg:mx-[5rem] md:mx-[3rem]  lg:pt-[5rem] md:pt-[8rem] ">
        {/* -----------pan banner---------------------- */}
        <div className="w-[80%] mx-auto   ">
          <img
            src={pan_corner}
            alt="pan-corner"
            className=" h-[4rem] sm:h-[8rem] md:h-[10rem] lg:h-[14rem]"
          />
        </div>
        {/* -----------shop by category div start here-------------------- */}

        <div>
          <p className="font-bold text-[1rem] pt-[2.7rem] pb-[1rem]">
            Shop by category
          </p>
          <div className="grid grid-cols-4 gap-2 auto-rows-[8rem] items-center gap-y-5">
            <div className="col-start-1 col-end-3 flex flex-col justify-center items-center bg-[#EDF4FE] ">
              <img
                src={breakfast}
                alt="fruits"
                className="h-[6rem] bg-[#EDF4FE] rounded-sm "
              />
              <p className="text-center font-medium text-[14px]">
                Fruits & Vegetables
              </p>
            </div>
            <div className="col-start-3 col-end-5  flex flex-col   justify-center items-center max-w-full  bg-[#EDF4FE]">
              <img
                src={breakfast}
                alt="fruits"
                className="h-[6rem]  rounded-sm "
              />
              <p className="text-center font-medium text-[14px]">
                Dairy & breakfast
              </p>
            </div>{" "}
            <div className=" flex flex-col  justify-center items-center bg-[#EDF4FE]">
              <img
                src={munchies}
                alt="fruits"
                className="h-[6rem] bg-[#EDF4FE] rounded-sm"
              />
              <p className="text-center font-medium text-[14px]">Munchies</p>
            </div>{" "}
            <div className="col-start-2 col-end-4  flex flex-col  justify-center items-center bg-[#EDF4FE]">
              <img
                src={colddrink}
                alt="fruits"
                className="h-[6rem] bg-[#EDF4FE] rounded-sm"
              />
              <p className="text-center font-medium text-[14px]">
                Cold Drinks & Juices
              </p>
            </div>{" "}
            <div className=" flex flex-col  justify-center items-center bg-[#EDF4FE]">
              <img
                src={instant_food}
                alt="fruits"
                className="h-[6rem] bg-[#EDF4FE] rounded-sm"
              />
              <p className="text-center font-medium text-[14px]">
                Instant & Frozen Food
              </p>
            </div>{" "}
            <div className=" flex flex-col  justify-center items-center bg-[#EDF4FE]">
              <img
                src={tea}
                alt="fruits"
                className="h-[6rem] bg-[#EDF4FE] rounded-sm"
              />
              <p className="text-center font-medium text-[14px]">
                Tea & Coffee
              </p>
            </div>{" "}
            <div className="flex flex-col justify-center items-center max-h-full bg-[#EDF4FE]">
              <img
                src={bakery}
                alt="fruits"
                className="h-[6rem] rounded-sm  "
              />
              <p className="text-center font-medium text-[14px]">
                Bakery & Biscuits
              </p>
            </div>{" "}
            <div className="  flex flex-col justify-center items-center bg-[#EDF4FE]">
              <img
                src={sweetTooth}
                alt="fruits"
                className="h-[6rem] bg-[#EDF4FE] rounded-sm"
              />
              <p className="text-center font-medium text-[14px]">Sweet Tooth</p>
            </div>{" "}
            <div className="  flex flex-col justify-center items-center bg-[#EDF4FE]">
              <img
                src={atta}
                alt="fruits"
                className="h-[6rem] bg-[#EDF4FE] rounded-sm"
              />
              <p className="text-center font-medium text-[14px]">
                Atta, Rice & Dal
              </p>
            </div>
          </div>
        </div>
        {/* ---------------Hot deals carousel starts here ------------- */}
        <div className="w-full overflow-hidden my-2 md:px-3">
          <div className="flex justify-between my-4">
            <p className="text-[1rem] font-bold ">Hot Deals</p>
            <p className="text-green-700 font-medium cursor-pointer">see all</p>
          </div>
          {/* -------first card starts here-------------- */}
          <Slider {...settings} className="">
            <div className="flex flex-col  pr-1 md:pr-2 lg:h-[14rem]  mr-2 md:mr-3 lg:pr-7  ">
              <div className="">
                <img
                  src={lays}
                  alt="lays"
                  className="w-full  h-auto max-h-[8rem] lg:max-h-[7rem] object-contain bg-gray-100 border border-gray-500 rounded-md"
                />
              </div>
              <div className="flex text-[12px] mt-0.5 w-fit bg-gray-100">
                <LuTimer className="mt-0.5" />
                <p>9 mins</p>
              </div>
              <p className="text-[13px] font-medium">Healthy Banana Chips </p>
              <p className="text-[12px] text-gray-600">100g</p>
              <div className="flex justify-between">
                <div className="flex flex-col gap-0">
                  <p className="text-[13px] font-medium">Rs 122</p>
                  <p className="text-[12px] line-through text-gray-700">
                    Rs 200
                  </p>
                </div>
                <button className="border  w-[4rem] rounded-md border-green-700 bg-green-100 text-green-700 font-medium text-[13px] cursor-pointer">
                  ADD
                </button>
              </div>
            </div>
            <div className="flex flex-col  pr-1 md:pr-2 lg:h-[14rem]  mr-2 md:mr-3 lg:pr-7  ">
              <div className="">
                <img
                  src={lays}
                  alt="lays"
                  className="w-full  h-auto max-h-[8rem] lg:max-h-[7rem] object-contain bg-gray-100 border border-gray-500 rounded-md"
                />
              </div>
              <div className="flex text-[12px] mt-0.5 w-fit bg-gray-100">
                <LuTimer className="mt-0.5" />
                <p>9 mins</p>
              </div>
              <p className="text-[13px] font-medium">Healthy Banana Chips </p>
              <p className="text-[12px] text-gray-600">100g</p>
              <div className="flex justify-between">
                <div className="flex flex-col gap-0">
                  <p className="text-[13px] font-medium">Rs 122</p>
                  <p className="text-[12px] line-through text-gray-700">
                    Rs 200
                  </p>
                </div>
                <button className="border  w-[4rem] rounded-md border-green-700 bg-green-100 text-green-700 font-medium text-[13px] cursor-pointer">
                  ADD
                </button>
              </div>
            </div>
            <div className="flex flex-col  pr-1 md:pr-2 lg:h-[14rem]  mr-2 md:mr-3 lg:pr-7  ">
              <div className="">
                <img
                  src={lays}
                  alt="lays"
                  className="w-full  h-auto max-h-[8rem] lg:max-h-[7rem] object-contain bg-gray-100 border border-gray-500 rounded-md"
                />
              </div>
              <div className="flex text-[12px] mt-0.5 w-fit bg-gray-100">
                <LuTimer className="mt-0.5" />
                <p>9 mins</p>
              </div>
              <p className="text-[13px] font-medium">Healthy Banana Chips </p>
              <p className="text-[12px] text-gray-600">100g</p>
              <div className="flex justify-between">
                <div className="flex flex-col gap-0">
                  <p className="text-[13px] font-medium">Rs 122</p>
                  <p className="text-[12px] line-through text-gray-700">
                    Rs 200
                  </p>
                </div>
                <button className="border  w-[4rem] rounded-md border-green-700 bg-green-100 text-green-700 font-medium text-[13px] cursor-pointer">
                  ADD
                </button>
              </div>
            </div>
            <div className="flex flex-col  pr-1 md:pr-2 lg:h-[14rem]  mr-2 md:mr-3 lg:pr-7  ">
              <div className="">
                <img
                  src={lays}
                  alt="lays"
                  className="w-full  h-auto max-h-[8rem] lg:max-h-[7rem] object-contain bg-gray-100 border border-gray-500 rounded-md"
                />
              </div>
              <div className="flex text-[12px] mt-0.5 w-fit bg-gray-100">
                <LuTimer className="mt-0.5" />
                <p>9 mins</p>
              </div>
              <p className="text-[13px] font-medium">Healthy Banana Chips </p>
              <p className="text-[12px] text-gray-600">100g</p>
              <div className="flex justify-between">
                <div className="flex flex-col gap-0">
                  <p className="text-[13px] font-medium">Rs 122</p>
                  <p className="text-[12px] line-through text-gray-700">
                    Rs 200
                  </p>
                </div>
                <button className="border  w-[4rem] rounded-md border-green-700 bg-green-100 text-green-700 font-medium text-[13px] cursor-pointer">
                  ADD
                </button>
              </div>
            </div>
            <div className="flex flex-col  pr-1 md:pr-2 lg:h-[14rem]  mr-2 md:mr-3 lg:pr-7  ">
              <div className="">
                <img
                  src={lays}
                  alt="lays"
                  className="w-full  h-auto max-h-[8rem] lg:max-h-[7rem] object-contain bg-gray-100 border border-gray-500 rounded-md"
                />
              </div>
              <div className="flex text-[12px] mt-0.5 w-fit bg-gray-100">
                <LuTimer className="mt-0.5" />
                <p>9 mins</p>
              </div>
              <p className="text-[13px] font-medium">Healthy Banana Chips </p>
              <p className="text-[12px] text-gray-600">100g</p>
              <div className="flex justify-between">
                <div className="flex flex-col gap-0">
                  <p className="text-[13px] font-medium">Rs 122</p>
                  <p className="text-[12px] line-through text-gray-700">
                    Rs 200
                  </p>
                </div>
                <button className="border  w-[4rem] rounded-md border-green-700 bg-green-100 text-green-700 font-medium text-[13px] cursor-pointer">
                  ADD
                </button>
              </div>
            </div>
            <div className="flex flex-col  pr-1 md:pr-2 lg:h-[14rem]  mr-2 md:mr-3 lg:pr-7  ">
              <div className="">
                <img
                  src={lays}
                  alt="lays"
                  className="w-full  h-auto max-h-[8rem] lg:max-h-[7rem] object-contain bg-gray-100 border border-gray-500 rounded-md"
                />
              </div>
              <div className="flex text-[12px] mt-0.5 w-fit bg-gray-100">
                <LuTimer className="mt-0.5" />
                <p>9 mins</p>
              </div>
              <p className="text-[13px] font-medium">Healthy Banana Chips </p>
              <p className="text-[12px] text-gray-600">100g</p>
              <div className="flex justify-between">
                <div className="flex flex-col gap-0">
                  <p className="text-[13px] font-medium">Rs 122</p>
                  <p className="text-[12px] line-through text-gray-700">
                    Rs 200
                  </p>
                </div>
                <button className="border  w-[4rem] rounded-md border-green-700 bg-green-100 text-green-700 font-medium text-[13px] cursor-pointer">
                  ADD
                </button>
              </div>
            </div>
            <div className="flex flex-col  pr-1 md:pr-2 lg:h-[14rem]  mr-2 md:mr-3 lg:pr-7  ">
              <div className="">
                <img
                  src={lays}
                  alt="lays"
                  className="w-full  h-auto max-h-[8rem] lg:max-h-[7rem] object-contain bg-gray-100 border border-gray-500 rounded-md"
                />
              </div>
              <div className="flex text-[12px] mt-0.5 w-fit bg-gray-100">
                <LuTimer className="mt-0.5" />
                <p>9 mins</p>
              </div>
              <p className="text-[13px] font-medium">Healthy Banana Chips </p>
              <p className="text-[12px] text-gray-600">100g</p>
              <div className="flex justify-between">
                <div className="flex flex-col gap-0">
                  <p className="text-[13px] font-medium">Rs 122</p>
                  <p className="text-[12px] line-through text-gray-700">
                    Rs 200
                  </p>
                </div>
                <button className="border  w-[4rem] rounded-md border-green-700 bg-green-100 text-green-700 font-medium text-[13px] cursor-pointer">
                  ADD
                </button>
              </div>
            </div>
            <div className="flex flex-col  pr-1 md:pr-2 lg:h-[14rem]  mr-2 md:mr-3 lg:pr-7  ">
              <div className="">
                <img
                  src={lays}
                  alt="lays"
                  className="w-full  h-auto max-h-[8rem] lg:max-h-[7rem] object-contain bg-gray-100 border border-gray-500 rounded-md"
                />
              </div>
              <div className="flex text-[12px] mt-0.5 w-fit bg-gray-100">
                <LuTimer className="mt-0.5" />
                <p>9 mins</p>
              </div>
              <p className="text-[13px] font-medium">Healthy Banana Chips </p>
              <p className="text-[12px] text-gray-600">100g</p>
              <div className="flex justify-between">
                <div className="flex flex-col gap-0">
                  <p className="text-[13px] font-medium">Rs 122</p>
                  <p className="text-[12px] line-through text-gray-700">
                    Rs 200
                  </p>
                </div>
                <button className="border  w-[4rem] rounded-md border-green-700 bg-green-100 text-green-700 font-medium text-[13px] cursor-pointer">
                  ADD
                </button>
              </div>
            </div>
            <div className="flex flex-col  pr-1 md:pr-2 lg:h-[14rem]  mr-2 md:mr-3 lg:pr-1 ">
              <div className="">
                <img
                  src={lays}
                  alt="lays"
                  className="w-full  h-auto max-h-[8rem] lg:max-h-[7rem] object-contain bg-gray-100 border border-gray-500 rounded-md"
                />
              </div>
              <div className="flex text-[12px] mt-0.5 w-fit bg-gray-100">
                <LuTimer className="mt-0.5" />
                <p>9 mins</p>
              </div>
              <p className="text-[13px] font-medium">Healthy Banana Chips </p>
              <p className="text-[12px] text-gray-600">100g</p>
              <div className="flex justify-between">
                <div className="flex flex-col gap-0">
                  <p className="text-[13px] font-medium">Rs 122</p>
                  <p className="text-[12px] line-through text-gray-700">
                    Rs 200
                  </p>
                </div>
                <button className="border  w-[4rem] rounded-md border-green-700 bg-green-100 text-green-700 font-medium text-[13px] cursor-pointer">
                  ADD
                </button>
              </div>
            </div>
          </Slider>
        </div>
        {/* -----------making another div here------------- */}
        <div className="w-full overflow-hidden my-2 md:px-3">
          <div className="flex justify-between my-4">
            <p className="text-[1rem] font-bold ">Snack it away</p>
            <p className="text-green-700 font-medium cursor-pointer">see all</p>
          </div>
          {/* -------first card starts here-------------- */}
          <Slider {...settings} className="">
            <div className="flex flex-col  pr-1 md:pr-2 lg:h-[14rem]  mr-2 md:mr-3 lg:pr-7  ">
              <div className="">
                <img
                  src={lays}
                  alt="lays"
                  className="w-full  h-auto max-h-[8rem] lg:max-h-[7rem] object-contain bg-gray-100 border border-gray-500 rounded-md"
                />
              </div>
              <div className="flex text-[12px] mt-0.5 w-fit bg-gray-100">
                <LuTimer className="mt-0.5" />
                <p>9 mins</p>
              </div>
              <p className="text-[13px] font-medium">Healthy Banana Chips </p>
              <p className="text-[12px] text-gray-600">100g</p>
              <div className="flex justify-between">
                <div className="flex flex-col gap-0">
                  <p className="text-[13px] font-medium">Rs 122</p>
                  <p className="text-[12px] line-through text-gray-700">
                    Rs 200
                  </p>
                </div>
                <button className="border  w-[4rem] rounded-md border-green-700 bg-green-100 text-green-700 font-medium text-[13px] cursor-pointer">
                  ADD
                </button>
              </div>
            </div>
            <div className="flex flex-col  pr-1 md:pr-2 lg:h-[14rem]  mr-2 md:mr-3 lg:pr-7  ">
              <div className="">
                <img
                  src={lays}
                  alt="lays"
                  className="w-full  h-auto max-h-[8rem] lg:max-h-[7rem] object-contain bg-gray-100 border border-gray-500 rounded-md"
                />
              </div>
              <div className="flex text-[12px] mt-0.5 w-fit bg-gray-100">
                <LuTimer className="mt-0.5" />
                <p>9 mins</p>
              </div>
              <p className="text-[13px] font-medium">Healthy Banana Chips </p>
              <p className="text-[12px] text-gray-600">100g</p>
              <div className="flex justify-between">
                <div className="flex flex-col gap-0">
                  <p className="text-[13px] font-medium">Rs 122</p>
                  <p className="text-[12px] line-through text-gray-700">
                    Rs 200
                  </p>
                </div>
                <button className="border  w-[4rem] rounded-md border-green-700 bg-green-100 text-green-700 font-medium text-[13px] cursor-pointer">
                  ADD
                </button>
              </div>
            </div>
            <div className="flex flex-col  pr-1 md:pr-2 lg:h-[14rem]  mr-2 md:mr-3 lg:pr-7  ">
              <div className="">
                <img
                  src={lays}
                  alt="lays"
                  className="w-full  h-auto max-h-[8rem] lg:max-h-[7rem] object-contain bg-gray-100 border border-gray-500 rounded-md"
                />
              </div>
              <div className="flex text-[12px] mt-0.5 w-fit bg-gray-100">
                <LuTimer className="mt-0.5" />
                <p>9 mins</p>
              </div>
              <p className="text-[13px] font-medium">Healthy Banana Chips </p>
              <p className="text-[12px] text-gray-600">100g</p>
              <div className="flex justify-between">
                <div className="flex flex-col gap-0">
                  <p className="text-[13px] font-medium">Rs 122</p>
                  <p className="text-[12px] line-through text-gray-700">
                    Rs 200
                  </p>
                </div>
                <button className="border  w-[4rem] rounded-md border-green-700 bg-green-100 text-green-700 font-medium text-[13px] cursor-pointer">
                  ADD
                </button>
              </div>
            </div>
            <div className="flex flex-col  pr-1 md:pr-2 lg:h-[14rem]  mr-2 md:mr-3 lg:pr-7  ">
              <div className="">
                <img
                  src={lays}
                  alt="lays"
                  className="w-full  h-auto max-h-[8rem] lg:max-h-[7rem] object-contain bg-gray-100 border border-gray-500 rounded-md"
                />
              </div>
              <div className="flex text-[12px] mt-0.5 w-fit bg-gray-100">
                <LuTimer className="mt-0.5" />
                <p>9 mins</p>
              </div>
              <p className="text-[13px] font-medium">Healthy Banana Chips </p>
              <p className="text-[12px] text-gray-600">100g</p>
              <div className="flex justify-between">
                <div className="flex flex-col gap-0">
                  <p className="text-[13px] font-medium">Rs 122</p>
                  <p className="text-[12px] line-through text-gray-700">
                    Rs 200
                  </p>
                </div>
                <button className="border  w-[4rem] rounded-md border-green-700 bg-green-100 text-green-700 font-medium text-[13px] cursor-pointer">
                  ADD
                </button>
              </div>
            </div>
            <div className="flex flex-col  pr-1 md:pr-2 lg:h-[14rem]  mr-2 md:mr-3 lg:pr-7  ">
              <div className="">
                <img
                  src={lays}
                  alt="lays"
                  className="w-full  h-auto max-h-[8rem] lg:max-h-[7rem] object-contain bg-gray-100 border border-gray-500 rounded-md"
                />
              </div>
              <div className="flex text-[12px] mt-0.5 w-fit bg-gray-100">
                <LuTimer className="mt-0.5" />
                <p>9 mins</p>
              </div>
              <p className="text-[13px] font-medium">Healthy Banana Chips </p>
              <p className="text-[12px] text-gray-600">100g</p>
              <div className="flex justify-between">
                <div className="flex flex-col gap-0">
                  <p className="text-[13px] font-medium">Rs 122</p>
                  <p className="text-[12px] line-through text-gray-700">
                    Rs 200
                  </p>
                </div>
                <button className="border  w-[4rem] rounded-md border-green-700 bg-green-100 text-green-700 font-medium text-[13px] cursor-pointer">
                  ADD
                </button>
              </div>
            </div>
            <div className="flex flex-col  pr-1 md:pr-2 lg:h-[14rem]  mr-2 md:mr-3 lg:pr-7  ">
              <div className="">
                <img
                  src={lays}
                  alt="lays"
                  className="w-full  h-auto max-h-[8rem] lg:max-h-[7rem] object-contain bg-gray-100 border border-gray-500 rounded-md"
                />
              </div>
              <div className="flex text-[12px] mt-0.5 w-fit bg-gray-100">
                <LuTimer className="mt-0.5" />
                <p>9 mins</p>
              </div>
              <p className="text-[13px] font-medium">Healthy Banana Chips </p>
              <p className="text-[12px] text-gray-600">100g</p>
              <div className="flex justify-between">
                <div className="flex flex-col gap-0">
                  <p className="text-[13px] font-medium">Rs 122</p>
                  <p className="text-[12px] line-through text-gray-700">
                    Rs 200
                  </p>
                </div>
                <button className="border  w-[4rem] rounded-md border-green-700 bg-green-100 text-green-700 font-medium text-[13px] cursor-pointer">
                  ADD
                </button>
              </div>
            </div>
            <div className="flex flex-col  pr-1 md:pr-2 lg:h-[14rem]  mr-2 md:mr-3 lg:pr-7  ">
              <div className="">
                <img
                  src={lays}
                  alt="lays"
                  className="w-full  h-auto max-h-[8rem] lg:max-h-[7rem] object-contain bg-gray-100 border border-gray-500 rounded-md"
                />
              </div>
              <div className="flex text-[12px] mt-0.5 w-fit bg-gray-100">
                <LuTimer className="mt-0.5" />
                <p>9 mins</p>
              </div>
              <p className="text-[13px] font-medium">Healthy Banana Chips </p>
              <p className="text-[12px] text-gray-600">100g</p>
              <div className="flex justify-between">
                <div className="flex flex-col gap-0">
                  <p className="text-[13px] font-medium">Rs 122</p>
                  <p className="text-[12px] line-through text-gray-700">
                    Rs 200
                  </p>
                </div>
                <button className="border  w-[4rem] rounded-md border-green-700 bg-green-100 text-green-700 font-medium text-[13px] cursor-pointer">
                  ADD
                </button>
              </div>
            </div>
            <div className="flex flex-col  pr-1 md:pr-2 lg:h-[14rem]  mr-2 md:mr-3 lg:pr-7  ">
              <div className="">
                <img
                  src={lays}
                  alt="lays"
                  className="w-full  h-auto max-h-[8rem] lg:max-h-[7rem] object-contain bg-gray-100 border border-gray-500 rounded-md"
                />
              </div>
              <div className="flex text-[12px] mt-0.5 w-fit bg-gray-100">
                <LuTimer className="mt-0.5" />
                <p>9 mins</p>
              </div>
              <p className="text-[13px] font-medium">Healthy Banana Chips </p>
              <p className="text-[12px] text-gray-600">100g</p>
              <div className="flex justify-between">
                <div className="flex flex-col gap-0">
                  <p className="text-[13px] font-medium">Rs 122</p>
                  <p className="text-[12px] line-through text-gray-700">
                    Rs 200
                  </p>
                </div>
                <button className="border  w-[4rem] rounded-md border-green-700 bg-green-100 text-green-700 font-medium text-[13px] cursor-pointer">
                  ADD
                </button>
              </div>
            </div>
            <div className="flex flex-col  pr-1 md:pr-2 lg:h-[14rem]  mr-2 md:mr-3 lg:pr-1 ">
              <div className="">
                <img
                  src={lays}
                  alt="lays"
                  className="w-full  h-auto max-h-[8rem] lg:max-h-[7rem] object-contain bg-gray-100 border border-gray-500 rounded-md"
                />
              </div>
              <div className="flex text-[12px] mt-0.5 w-fit bg-gray-100">
                <LuTimer className="mt-0.5" />
                <p>9 mins</p>
              </div>
              <p className="text-[13px] font-medium">Healthy Banana Chips </p>
              <p className="text-[12px] text-gray-600">100g</p>
              <div className="flex justify-between">
                <div className="flex flex-col gap-0">
                  <p className="text-[13px] font-medium">Rs 122</p>
                  <p className="text-[12px] line-through text-gray-700">
                    Rs 200
                  </p>
                </div>
                <button className="border  w-[4rem] rounded-md border-green-700 bg-green-100 text-green-700 font-medium text-[13px] cursor-pointer">
                  ADD
                </button>
              </div>
            </div>
          </Slider>
        </div>
        {/* -----adding footer component--------- */}
        <div className="md:hidden">
          <Footer />
        </div>
        <div>
          <FooterLaptop />
        </div>
      </div>
    </>
  );
};

export default Hero;
