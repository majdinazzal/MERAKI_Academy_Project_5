const connection = require("../database/db");
const db = require("../database/db");

const getAllOrders = () => {
  const query = `select * from orders`;

  connection.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    } else {
      console.log(result);
      res
        .status(200)
        .json({ success: true, message: "All orders", result: result });
    }
  });
};

//================================================================================

const addOrders = (req, res) => {
  const { Product_Name, Product_Price, Product_Description, product_id } =
    req.body;
  const query = `insert into orders (Product_Name, Product_Price, Product_Description, product_id) values (?,?,?,?)`;
  const data = [Product_Name, Product_Price, Product_Description, product_id];
};

module.exports = { getAllOrders };

//get checkout ordersFunctions
