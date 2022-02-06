const connection = require("../database/db");
const db = require("../database/db");

const categoryFunc = (req, res) => {
  //select all where category =.......
  const category = req.params.Category;
  const query = `select * from products where Category=${"'" + category + "'"}`;
  const data = [category];
  connection.query(query, data, (err, result) => {
    if (err) {
      res.status(500).json({
        success: true,
        message: `Not found`,
        err,
      });
    } else if (result) {
      res.status(500).json({
        success: true,
        message: `All products from ${category} category`,
        err,
      });
    }
  });
};
module.exports = categoryFunc;
