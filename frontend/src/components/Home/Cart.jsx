import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { IoCloseSharp } from "react-icons/io5";
import { RxLapTimer } from "react-icons/rx";
import munchies from "../../assets/munchies.avif";
import { LuMinus } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { TbNotes } from "react-icons/tb";
import { MdDeliveryDining } from "react-icons/md";
import { IoBag } from "react-icons/io5";
import { TbMathGreater } from "react-icons/tb";

const Cart = ({
  isCartOpen,
  toggleDrawer,
  cartItems,
  setCartItems,
  IncreaseProductQuantity,
  decreaseProductQuantity,
  TotalNoOfItems,
  totalPriceAfterDiscount,
  totalOfActualPrice,
  deliveryCharge,
  handlingCharge,
  grandTotal,
}) => {
  // console.log("cart component is rendered");
  console.log(cartItems);

  return (
    <div>
      {/* <div className=" border-2 bg-gray-500 h-full w-[30%] z-50 fixed top-0 right-0">
        cart
      </div> */}
      <Drawer anchor="right" open={isCartOpen} onClose={toggleDrawer(false)}>
        <div className="flex bg-gray-100 flex-col w-[100vw] lg:w-[30vw] h-full ">
          <div className="flex bg-gray-100 flex-col">
            <div className="flex justify-between text-[1rem] bg-white font-medium  ">
              <h1 className="p-3">My Cart</h1>
              <IoCloseSharp
                onClick={toggleDrawer(false)}
                className="mx-3 mt-4"
              />
            </div>
            {cartItems.length == 0 ? (
              <p className="mx-auto mt-10 text-xl font-bold">
                Your Cart is Empty
              </p>
            ) : (
              <div>
                <div className="flex flex-col mx-3 my-2 rounded-lg bg-white">
                  <div className="flex flex-col mx-2">
                    <div className="flex gap-4 my-3 lg:gap-6 ">
                      <RxLapTimer className="text-[2.5rem]  rounded-xl bg-gray-100 p-2" />
                      <div className="flex flex-col ">
                        <h1 className="font-bold text-[15px]">
                          Delivery in 8 minutes
                        </h1>
                        <p className="text-[12px] text-gray-500">
                          Shipment of {TotalNoOfItems} items
                        </p>
                      </div>
                    </div>

                    {/* ----added product in cart------ */}
                    {cartItems.map((addedItem) => (
                      <div key={addedItem.id}>
                        <div className="flex gap-6 mt-1 py-2 justify-between">
                          <div className="flex gap-3">
                            <img
                              src={munchies}
                              alt="munchies image"
                              className="h-[4rem] border border-gray-200"
                            />

                            <div className="flex flex-col text-[12px] ">
                              <p>{addedItem.name}</p>
                              <p>{addedItem.weigh}gm</p>
                              <div className="flex gap-2 ">
                                <p className="font-bold">
                                  Rs {addedItem.price}
                                </p>
                                <p className="line-through">
                                  Rs {addedItem.originalPrice}
                                </p>
                              </div>
                            </div>
                            {/* ---price button--- */}
                          </div>
                          <div className="flex items-center border h-[1.8rem] rounded-lg mt-7 font-medium text-white bg-green-700 p-1 w-fit gap-2">
                            <LuMinus
                              className=" cursor-pointer"
                              onClick={() => decreaseProductQuantity(addedItem)}
                            />
                            <p>{addedItem.addedQuantity}</p>
                            <FiPlus
                              className=" font-bold cursor-pointer"
                              onClick={() => IncreaseProductQuantity(addedItem)}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col p-3 mx-3 my-4 rounded-lg bg-white">
                  <h1 className="font-bold text-[15px] text-gray-600 my-1 mb-2">
                    Bill details
                  </h1>
                  <div className="flex justify-between">
                    <div className="flex gap-1">
                      <div>
                        <TbNotes className=" mt-1" />
                      </div>
                      <div>
                        <p>Items total</p>
                      </div>
                    </div>

                    <div className="flex text-[13px] mt-1 gap-1">
                      <p className="text-gray-500 line-through">
                        {totalOfActualPrice}
                      </p>
                      <p className="font-medium">{totalPriceAfterDiscount}</p>
                    </div>
                  </div>
                  {/* -------delivery charge--------- */}
                  <div className="flex justify-between">
                    <div className="flex gap-1">
                      <div>
                        <MdDeliveryDining className=" mt-1" />
                      </div>
                      <div>
                        <p className="text-[14px]">Delivery Charge</p>
                      </div>
                    </div>

                    <div className="flex text-[13px] mt-1 gap-1">
                      <p className="text-gray-500 line-through">Rs 50</p>
                      <p className="font-medium">Rs {deliveryCharge}</p>
                    </div>
                  </div>
                  {/* --------handling charge----------- */}
                  <div className="flex justify-between">
                    <div className="flex gap-1">
                      <div className="text-[14px]">
                        <IoBag className="mt-0.5" />
                      </div>
                      <div>
                        <p className="text-[14px]">Handling Charge</p>
                      </div>
                    </div>

                    <div className="flex text-[13px] mt-1 gap-1">
                      <p className="font-medium">Rs {handlingCharge}</p>
                    </div>
                  </div>
                  <div className="flex justify-between mt-3 text-[15px]">
                    <p className="font-bold">Grand Total</p>
                    <p className="font-medium">Rs {grandTotal}</p>
                  </div>
                </div>

                <div className="bg-white h-[5rem] lg:h-[6rem] border-t-2  border-gray-100 rounded-md py-3 px-2 cursor-pointer mb-0 fixed bottom-0 w-full lg:w-[30vw]">
                  <div className="flex justify-between  bg-green-700 hover:bg-green-600 rounded-lg p-1 px-2  text-white">
                    <div className="">
                      <p className="text-[14px] font-bold">Rs {grandTotal}</p>
                      <p className="text-[12px] lg:text-[13px]">TOTAL</p>
                    </div>
                    <div className="flex items-center gap-0.5 font-medium">
                      <p>Proceed To Payment</p>
                      <TbMathGreater className="text-[15px] mt-1" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Cart;
