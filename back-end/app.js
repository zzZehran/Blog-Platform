const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const User = require("./models/User");
const Blog = require("./models/Blog");

app.use(express.json());
app.use(cors({ origin: "http://localhost:5174", credentials: true }));
// app.use(cookieParser("blogplatformsecret"));
app.use(
  session({
    secret: "blogplatformsecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

mongoose
  .connect("mongodb://127.0.0.1:27017/blogplatform")
  .then(() => console.log("Connected to Blog Platform"))
  .catch((err) => console.log("Error: ", err));

app.get("/", (req, res) => {
  if (req.session.count) {
    req.session.count += 1;
  } else {
    req.session.count = 1;
  }
  res.send(req.session);
});

app.post("/blogs/new", async (req, res) => {
  const newBlog = new Blog({
    imageUrl:
      "https://images.unsplash.com/photo-1605205805854-e233096145b8?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Who Should You Take as a Rival?",
    body: "lorem ipsum dolor lorem ipsum lorem ipsum dolor lorem ipsum lorem ipsum dolor lorem ipsum",
  });
  await newBlog.save();
  res.send(newBlog);
});

app.post("/users/new", async (req, res) => {
  const newUser = new User({
    name: "Zehran",
    email: "zzzehran@gmail.com",
    password: "zehran",
  });
  await newUser.save();
  res.send(newUser);
});

app.listen(5000, () => {
  console.log("On port 5000");
});
