// ? IMPORT MODULE
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");

//?DECLARATION
const app = express();
const blogRoute = require("./src/routes/blogs");
const authRoute = require("./src/routes/auth");

//?RUNNING
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("tiny"));
app.use("/upload", express.static(path.join(__dirname, "upload")));

app.use("/blog", blogRoute);
app.use("/auth", authRoute);

// todo: CORS  POLICE ORIGIN
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
});

//! connect to mongodb
mongoose
  .connect("mongodb+srv://hidayatullah:Bismillah94@cluster0.hbanr.mongodb.net/blogs")
  .then(() => {
    app.listen(4000, (req, res) => {
      console.log("Connect to database succes and Server Running in Port: " + 4000);
    });
  })
  .catch((err) => {
    console.log(err);
  });
