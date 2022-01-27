// ! Model digunakan untuk menentukan sebuah STRUKTUR database

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BlogPost = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String, // hanya menyimpan url nya saja untk file d project
      required: false,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true, // berfungsi untuk menampilkan created_at dan update_at
  }
);

module.exports = mongoose.model("BlogPosted", BlogPost);
