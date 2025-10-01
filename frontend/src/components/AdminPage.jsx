import React from "react";
import { useForm } from "react-hook-form";
import backgroundAdminImage from "../assets/PurpleBackground.png";
import adminLogo from "../assets/adminLogo.png";

const AdminPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("category", data.category);
    formData.append("stock", data.stock);
    formData.append("weigh", data.weigh);
    formData.append("originalPrice", data.originalPrice);
    formData.append("image", data.image[0]);
    const AdminLogin = async () => {
      const response = await fetch("http://localhost:8000/adminHandle", {
        method: "POST",
        credentials: "include",
        body: formData,
      });
      const result = await response.json();
      console.log(result);
      console.log("data from backend is ", result.msg);
    };

    AdminLogin();
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen w-full flex flex-col justify-center px-4"
      style={{ backgroundImage: `url(${backgroundAdminImage})` }}
    >
      {/* <p className="text-2xl mb-10 mx-auto font-medium text-blue-600">ADMIN Dashboard</p> */}
      <div className="flex flex-col md:flex-row justify-around mx-auto w-full md:w-[40rem] lg:w-[45rem] bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Form Section */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col md:gap-3 gap-2 p-6"
          action="/adminHandle"
          method="POST"
          encType="multipart/form-data"
        >
          {/* -----title---------- */}
          <div className="w-full">
            <input
              type="text"
              placeholder="Product Title"
              {...register("title", {
                required: { value: true, message: "Title is required" },
                minLength: { value: 3, message: "Minimum length is 3" },
              })}
              className="border-b border-sky-600 focus:border-b focus:outline-none bg-blue-100 p-2 rounded-md w-full"
            />
            {errors.title && (
              <p className="text-red-500 text-[11px] md:text-[13px]">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* ---------image--------------- */}
          <div className="w-full">
            <input
              type="file"
              name="image"
              placeholder="Product Image"
              className="border-b border-sky-600 focus:border-b focus:outline-none bg-blue-100 p-2 rounded-md w-full"
              accept="image/*"
              {...register("image", {
                required: "Product image is required",
              })}
            />
            {errors.image && (
              <p className="text-red-500 text-[11px] md:text-[13px]">
                {errors.image.message}
              </p>
            )}
          </div>

          {/* ----category--------- */}
          <div className="w-full">
            <input
              type="text"
              placeholder="Category"
              {...register("category", {
                required: { value: true, message: "Category is required" },
                minLength: { value: 3, message: "Minimum length is 3" },
              })}
              className="border-b border-sky-600 focus:border-b focus:outline-none bg-blue-100 p-2 rounded-md w-full"
            />
            {errors.category && (
              <p className="text-red-500 text-[11px] md:text-[13px]">
                {errors.category.message}
              </p>
            )}
          </div>

          {/* ----stock------------ */}
          <div className="w-full">
            <input
              type="text"
              placeholder="Stock"
              {...register("stock", {
                required: { value: true, message: "Stock is required" },
              })}
              className="border-b border-sky-600 focus:border-b focus:outline-none bg-blue-100 p-2 rounded-md w-full"
            />
            {errors.stock && (
              <p className="text-red-500 text-[11px] md:text-[13px]">
                {errors.stock.message}
              </p>
            )}
          </div>

          {/* ----------weigh----- */}
          <div className="w-full">
            <input
              type="number"
              placeholder="Weigh"
              {...register("weigh", {
                required: {
                  value: true,
                  message: "Product weight is required",
                },
              })}
              className="border-b border-sky-600 focus:border-b focus:outline-none bg-blue-100 p-2 rounded-md w-full"
            />
            {errors.weigh && (
              <p className="text-red-500 text-[11px] md:text-[13px]">
                {errors.weigh.message}
              </p>
            )}
          </div>

          {/* ------------discountedPrice---------- */}

          {/* -----------OriginalPrice----------- */}
          <div className="w-full">
            <input
              type="text"
              placeholder="Original Price"
              {...register("originalPrice", {
                required: {
                  value: true,
                  message: "Product original price is required",
                },
              })}
              className="border-b border-sky-600 focus:border-b focus:outline-none bg-blue-100 p-2 rounded-md w-full"
            />
            {errors.originalPrice && (
              <p className="text-red-500 text-[11px] md:text-[13px]">
                {errors.originalPrice.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-5">
            <button
              type="submit"
              className="bg-sky-600 px-6 py-2 cursor-pointer text-white font-bold hover:bg-sky-500 rounded-md"
            >
              ADD Product
            </button>
          </div>
        </form>

        {/* Image Section (hidden on mobile) */}
        <div className="bg-[#F7EDE4] hidden md:flex items-center justify-center rounded-r-xl">
          <img
            src={adminLogo}
            alt="Admin illustration"
            className="h-[15rem] w-[20rem] object-contain p-3"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
