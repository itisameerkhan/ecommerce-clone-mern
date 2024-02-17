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
app.use(express.json());

// Middleware for cors policy
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET','POST','PUT','DELETE'],
  allowedHeaders: ['Content-Type']
}))

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

app.post('/addproduct', async(req, res) => {
    
    let products = await Product.find({});
    let lastProductId = 0;

    if(products.length > 0) lastProductId = products[products.length-1].id;
    
    
    const product = await Product.create({
        id: ++lastProductId,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    });

    res.json({success: 1});
});

// Creating API for deleting products

app.post('/removeproduct', async(req, res) => {
    const product = await Product.findOneAndDelete({id: req.body.id});
    res.json({message: 'success'});
})

// Creating API for getting all products

app.get('/allproducts',async(req, res) => {

    const products = await Product.find({});
    res.status(200).json(products);

});