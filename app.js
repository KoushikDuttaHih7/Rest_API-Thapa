require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const PORT = process.env.PORT;

const products_routes = require("./routes/products");

app.get("/", (req, res) => {
  res.send("Hi, I'm Live");
});

// to set router
app.use("/api/products", products_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`Yes I'm connected to ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
