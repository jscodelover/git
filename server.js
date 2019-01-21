const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Learning git" });
});

app.listen(3000, () => {
  console.log("running at port", 3000);
});
