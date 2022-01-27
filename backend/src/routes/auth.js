//? Berisi controller dan route yang akan di export ke index

const express = require("express");

const router = express.Router();
const authController = require("../controller/auth");

router.post("/register", authController.register);

module.exports = router;
