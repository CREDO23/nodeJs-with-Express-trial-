const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(PORT, () => {
  console.log(`App runing on ${PORT}`);
});
