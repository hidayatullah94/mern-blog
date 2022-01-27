const express = require("express");
const upload = require("../middleware/upload");
const router = express.Router();
const blogsController = require("../controller/blogs");

//? CREATE -> POST
// body digunakan untuk validasi inputan dari client dgn minimal panjang 5 huruf
router.post("/post", upload.single("image"), blogsController.createBlog);

// ? READ -> GET
router.get("/posts", blogsController.getAllBlog);
router.get("/post/:_id", blogsController.getBlogId);

// todo UPDATE -> PUT
router.put("/post/:_id", upload.single("image"), blogsController.updateBlog);

// ! DELETE -> DELETE
router.delete("/post/:_id", blogsController.deleteBlog);

module.exports = router;
