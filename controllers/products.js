const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const { name, company, feature } = req.query;
  const queryObject = {};

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  if (feature) {
    queryObject.feature = feature;
  }

  if (company) {
    queryObject.company = company;
  }

  console.log(queryObject);

  const myData = await Product.find(queryObject);
  res.status(200).json({ myData });
};

const getAllProductsTesting = async (req, res) => {
  const myData = await Product.find(req.query);
  res.status(200).json({ myData });
};

module.exports = { getAllProducts, getAllProductsTesting };
