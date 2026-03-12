const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const connectToDB = require("./config/db");
const cors = require("cors");

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const corsOptions = 
{
    origin: process.env.FRONTEND,
    methods: ["GET", "POST", "PUT", "DELETE"]
}
app.use(cors(corsOptions));

connectToDB();

