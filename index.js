const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4400;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contact.html"));
});

app.listen(PORT, () => {
  console.log(`App runing on ${PORT}`);
});
