const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "hello git" });
});

app.get("/welcome", (req, res) => {
  res.status(200).json({ message: "welcome to git" });
});

app.listen(3000, () => {
  console.log("server running at port", 3000);
});
