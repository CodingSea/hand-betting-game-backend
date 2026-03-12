const express = require("express");
const app = express();
require("dotenv").config();
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

const gameRoute = require("./routes/game.route");
app.use("/game", gameRoute);

const port = process.env.PORT || 3000;
app.listen(port, () =>
{
    console.log("listening to port " + port);
})