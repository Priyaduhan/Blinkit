import mongoose from "mongoose";
// import { Category } from "./category.models.js";

const ProductSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },

  stock: {
    type: Number,
    required: true,
  },
  weigh: {
    type: Number,
    required: true,
  },
  originalPrice: {
    type: Number,
    required: true,
  },
  category: {
    // type: mongoose.Schema.Types.ObjectId,
    // ref: "category",
    type: String,
    required: true,
  },
});

export const productmodel = mongoose.model("productmodel", ProductSchema);
