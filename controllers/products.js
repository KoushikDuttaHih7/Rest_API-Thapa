const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const { name, company, feature, sort, select } = req.query;
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

  let apiData = Product.find(queryObject);

  if (sort) {
    // let sortFix = sort.replace(",", " ");
    let sortFix = sort.split(",").join(" ");
    apiData = apiData.sort(sortFix);
  }

  if (select) {
    // let selectFix = select.replace(",", " ");
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }

  console.log(queryObject);

  const myData = await apiData;
  res.status(200).json({ myData });
};

const getAllProductsTesting = async (req, res) => {
  // const myData = await Product.find(req.query).sort("-price");
  const myData = await Product.find(req.query).select("name company");
  res.status(200).json({ myData });
};

module.exports = { getAllProducts, getAllProductsTesting };
