const connection = require("../database/db");
const db = require("../database/db");

const sDelete = (req, res) => {
  //we need to update the dataBase(products table)
  const userId = req.body;
  const query = `update products set softDelete=1 where userId=${userId}`;
  //check if data is freinds with ${} ???????????
  const data = [userId];
  connection.query(query, data, (err, result) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .json({
          success: false,
          message: "internal server error",
          result: result,
        });
    }
  });
};
module.exports = sDelete;
