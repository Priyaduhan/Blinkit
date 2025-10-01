import express from "express";
import { addProduct } from "../controllers/adminController.js";
import multer from "multer";
import { productmodel } from "../models/product.models.js";

const router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("image"), addProduct);

router.get("/api/product1", async (req, res) => {
  const data = await productmodel.findById("68d824b0dd7547f2f35f0247");
  if (!data) {
    console.log("proudct is not found");
  }
  console.log(data);
  return res.json({ data });
});

export default router;
