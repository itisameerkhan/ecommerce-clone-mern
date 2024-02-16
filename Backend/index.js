import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import cors from "cors"
import { DB_URL } from "./utils/constants.js";

const PORT = 8080;
const app = express();
app.use(cors());
app.use(express.json());

// Mongo DB Connection
mongoose.connect(DB_URL)
.then(() => {
    console.log('DB Connected succesfully');
})

// API Creation
app.listen(PORT,(err) => {
    if(err) console.log(err);
    else console.log('server running on port: ' + PORT);
});

app.get('/', (req, res) => {
    res.status(200).json({message: "success"});
});

//Image Storage Engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}_${path.extname(file.originalname)}`)
    }
});

const upload = multer({storage: storage});

// Creating 