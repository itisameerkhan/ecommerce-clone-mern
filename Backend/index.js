import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import cors from "cors";
import { DB_URL } from "./utils/constants.js";
import { Product } from "./model/product.js";
import { Users } from "./model/users.js";

const PORT = 8080;
const app = express();
app.use(express.json());

// Middleware for cors policy
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "auth-token"],
  })
);

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

app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let lastProductId = 0;

  if (products.length > 0) lastProductId = products[products.length - 1].id;

  const product = await Product.create({
    id: ++lastProductId,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });

  res.json({ success: 1 });
});

// Creating API for deleting products

app.post("/removeproduct", async (req, res) => {
  const product = await Product.findOneAndDelete({ id: req.body.id });
  res.json({ message: "success" });
});

// Creating API for getting all products

app.get("/allproducts", async (req, res) => {
  const products = await Product.find({});
  res.status(200).json(products);
});

// Creating Endpoint for registering user
app.post("/signup", async (req, res) => {
  const check = await Users.findOne({ email: req.email });
  if (check) {
    return res.status(400).json({
      success: false,
      errors: "existing user found with same email address",
    });
  }
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });

  try {
    await user.save();
  } catch (err) {
    return res.status(400).json({
      success: false,
      errors: "existing user found with same email address",
    });
  }

  const data = {
    user: {
      id: user.id,
    },
  };

  const token = jwt.sign(data, "secret_ecom");
  res.json({ success: true, token });
});

// Creating Endpoint for user login
app.post("/login", async (req, res) => {
  const user = await Users.findOne({ email: req.body.email });
  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "secret_ecom");
      res.json({ success: true, token });
    } else {
      res.status(400).json({ success: false, errors: "Wrong Password" });
    }
  } else {
    res
      .status(400)
      .json({ success: false, errors: "email address not fount 404!" });
  }
});

// Creating Endpoint for new collection data
app.get("/newcollections", async (req, res) => {
  const products = await Product.find({});
  const newCollections = products.slice(1).slice(-8);
  res.json(newCollections);
});

// Creating Endpoint for popular in women
app.get("/popularinwomen", async (req, res) => {
  const products = await Product.find({ category: "women" });
  const popularInWomen = products.slice(0, 4);
  res.json(popularInWomen);
});


// Creating middleware for fetching user
const fetchUser = async (req, res, next) => {
  const token = req.header("auth-token");
  if(!token) {
    res.status(401).json({errors: "Please Authenticate using valid token"});
  } else {
    try {
      const data = jwt.verify(token, "secret_ecom");
      req.user = data.user;
      next();
    } catch(err) {
      res.status(401).send(err);
      // console.log(err);
      // res.status(401).send({errors: "Please authenticate using valid token"});
    }
  }
};

//Creating Endpoint for Adding products cartData
app.post("/addtocart", fetchUser, async(req, res) => {
  const user = await Users.findOne({_id: req.user.id});
  let cart = {};
  for(let i=0;i<300;i++) {
    cart[i] = req.body[i];
  }
  console.log(cart);
  const data = await Users.findOneAndUpdate({_id: req.user.id}, {cartData: cart});
  console.log(data);
  res.json({success: true});
});