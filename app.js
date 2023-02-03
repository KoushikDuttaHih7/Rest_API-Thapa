const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hi, I'm Live");
});

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Yes I'm connected to ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
