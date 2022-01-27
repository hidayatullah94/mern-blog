// ? variabel create
const { validationResult } = require("express-validator");
const BlogPosted = require("../models/blog");
const path = require("path");
const { join } = require("path");
const fs = require("fs"); // file system untuk remove
const { count } = require("console");

//todo METHOD POST / CREATE BLOG
exports.createBlog = (req, res, next) => {
  // untuk validasi data inputan client
  const errors = validationResult(req);

  // validasi untuk inputan
  if (!errors.isEmpty()) {
    res.status(400).json({
      message: "Input Value tidak valid",
      data: null,
    });
  }
  //validasi untuk file inputan
  if (!req.file) {
    res.status(422).json({
      message: "Image Harus di Upload",
      data: null,
    });
  }

  // kirim data ke models untuk database
  const Posting = new BlogPosted({
    title: req.body.title,
    image: req.file.path,
    content: req.body.content,
    author: {
      uid: 1,
      name: "hidayat",
    },
  });

  //simpan data ke database
  Posting.save()
    .then((result) => {
      res.status(201).json({
        message: "Create Blog Succes",
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

//?METHODE GET ALL BLOG
exports.getAllBlog = (req, res, next) => {
  //for pignation
  const currenPage = req.query.page || 1;
  const perPage = req.query.perPage || 2; //for data page
  let totalItem = 0;

  BlogPosted.find()
    .countDocuments() // total semua document/data
    .then((count) => {
      totalItem = count;
      return BlogPosted.find()
        .skip((parseInt(currenPage) - 1) * parseInt(perPage))
        .limit(parseInt(perPage));
    })
    .then((result) => {
      res.status(200).json({
        message: "data berhasil ditampilkan",
        data: result,
        total_Item: totalItem,
        per_Page: parseInt(perPage),
        curren_Page: parseInt(currenPage),
      });
    })

    .catch((err) => {
      console.log(err);
    });
};
//?METHODE GET BLOG by ID
exports.getBlogId = (req, res, next) => {
  BlogPosted.findById(req.params._id)
    .then((result) => {
      if (!result) {
        const error = new Error("Blog tidak ditemukan");
        throw error;
      }
      res.status(200).json({
        message: "data berhasil ditampilkan",
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
  next();
};

//todo: variabel update blog

exports.updateBlog = (req, res, next) => {
  const title = req.body.title;
  const image = req.file.path;
  const content = req.body.content;
  const id = req.params._id;
  BlogPosted.findById(id)
    //promise pertama membuat perubahan
    .then((posted) => {
      if (!posted) {
        const error = new Error("Blog tidak ditemukan");
        throw error;
      }
      posted.title = title;
      posted.image = image;
      posted.content = content;
      // lalu simpan perubahan
      return posted.save();
    })

    //promise ke dua untuk menangkap perubahan
    .then((posted) => {
      res.status(200).json({
        message: "data berhasil di update",
        data: posted,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

//! variabel delete blog
exports.deleteBlog = (req, res, next) => {
  const id = req.params._id;

  BlogPosted.findById(id)
    .then((post) => {
      if (!post) {
        const error = new Error("data tidak ditemukan");
        throw error;
      }
      removeImage(post.image);
      return BlogPosted.findByIdAndRemove(id);
    })
    .then((result) => {
      res.status(200).json({
        message: "delete succes",
        date: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const removeImage = (filePath) => {
  console.log(filePath);
  console.log(__dirname);
  //lokasi folder upload
  filePath = path.join(__dirname, "../../", filePath);
  fs.unlink(filePath, (err) => console.log(err)); // untuk hapus image
};
