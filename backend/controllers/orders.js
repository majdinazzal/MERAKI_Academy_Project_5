const connection = require("../database/db");
const db = require("../database/db");

const getAllOrders = (req, res) => {
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

module.exports = { getAllOrders };

//get checkout ordersF
