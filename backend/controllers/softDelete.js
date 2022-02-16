const connection = require("../database/db");
const db = require("../database/db");

const sDelete = (req, res) => {
  //we need to update the dataBase(products table)
  const userId = req.params.userId;
  const query = `update products set softDelete=0 where userId=${userId}`;
  connection.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "internal server error",
        result: result,
      });
    } else {
      res
        .status(200)
        .json({ success: true, message: "Sdelete =1", result: result });
    }
  });
};
module.exports = sDelete;
