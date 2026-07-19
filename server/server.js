
const express = require("express");
//Allow requests from different ports
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const noteRoutes = require("./routes/noteRoutes");

//This loads the values from .env into process.env.
dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

//MIDDLEWARES
app.use(cors());//Tells Express: "Allow requests from other origins (like the React app)."
app.use(express.json());

app.use("/api", noteRoutes);

app.listen(PORT, console.log("SERVER IS RUNNING ON PORT:"+ PORT));

