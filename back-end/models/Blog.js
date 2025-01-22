const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  imageUrl: String,
  title: String,
  body: String,
});

const Blog = new mongoose.model("Blog", blogSchema);
module.exports = Blog;
