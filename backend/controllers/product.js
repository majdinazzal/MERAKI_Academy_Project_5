const connection = require("../database/db");
const getAllProduct = (req, res) => {
    const query = `SELECT * FROM product WHERE is_deleted=0;`;
    // use the query method to execute a query
    connection.query(query, (err, result) => {
      if (err) {
        res.status(500).json({
          success: false,
          massage: "server error",
          err: err,
        });
      }
      // result are the data returned by mysql server
      res.status(200).json({
        success: true,
        massage: "All the product",
        results: result,
      });
    });
  };
  
