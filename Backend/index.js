import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import cors from "cors";
import { DB_URL } from "./utils/constants.js";
import { Product } from "./model/product.js";

const PORT = 8080;
const app = express();
app.use(cors());
app.use(express.json());

// Mongo DB Connection
mongoose.connect(DB_URL).then(() => {
  console.log("DB Connected succesfully");
});

// API Creation
app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log("server running on port: " + PORT);
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "success" });
});

//Image Storage Engine
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

// Creating upload Endpoint for image
app.use("/images", express.static("upload/images"));

app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${PORT}/images/${req.file.filename}`,
  });
});

app.post('/addProduct', async(req, res) => {
    
    let products = await Product.find({});
    
    const product = await Product.create({
        id: products.length + 1,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });

    res.json(product);
});