import { productmodel } from "../models/product.models.js";
export const addProduct = async (req, res) => {
  try {
    console.log("addProduct body is", req.body);
    console.log("req.file is ", req.file);
    // return res.json({ msg: "stored in db" });

    const data = await req.body;
    const result = await productmodel.create({
      title: data.title,
      weigh: data.weigh,
      stock: data.stock,
      originalPrice: data.originalPrice,
      category: data.category,
      image: req.file.path,
    });
    console.log("created product model is ", result);
    return res.status(200).json({ msg: result });
  } catch (error) {
    console.log("error in product backend is ", error);
  }
};
