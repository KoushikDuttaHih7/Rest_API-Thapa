const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "I'm getAllProducts" });
};

const getAllProductsTesting = async (req, res) => {
  res.status(200).json({ msg: "I'm getAllProductsTesting" });
};

module.exports = { getAllProducts, getAllProductsTesting };
