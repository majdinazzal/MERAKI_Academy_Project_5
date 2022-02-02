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
  
  const createNewproduct = (req, res) => {
    const { Product_Name, Description,Price,Category } = req.body;
    const userId = req.token.userId;
    const query = `INSERT INTO product (Product_Name, Description,Price,Category,userId) VALUES (?,?,?,?,?);`;
    const data = [Product_Name, Description,Price,Category,userId];
  
    connection.query(query, data, (err, results) => {
      if (err) {
        res.status(500).json({
          success: false,
          massage: "Server error",
          err: err,
        });
      }
      // result are the data returned by mysql server
      res.status(200).json({
        success: true,
        massage: "product created",
        results: results,
      });
    });
  };
  
  const updateproductById = (req, res) => {
    const { Product_Name, Description,Price } = req.body;
    const id = req.params.id;
  
    const query = `UPDATE product SET Product_Name=?, Description=? WHERE id=?;`;
  
    const data = [Product_Name, Description,Price, id];
  
    connection.query(query, data, (err, results) => {
      if (err) {
        return res.status(404).json({
          success: false,
          massage: `Server error`,
          err: err,
        });
      }
      if (results.changedRows == 0) {
        res.status(404).json({
          success: false,
          massage: `The product: ${id} is not found`,
          err: err,
        });
      }
      // result are the data returned by mysql server
      res.status(201).json({
        success: true,
        massage: `product updated`,
        results: results,
      });
    });
  };
  const getproductByuser = (req, res) => {
    const userId = req.query.id;
  
    const query = `SELECT * FROM product WHERE userId=? AND is_deleted=0;`;
    const data = [userId];
  
    connection.query(query, data, (err, results) => {
      if (err) {
        return res.status(404).json({
          success: false,
          massage: "The user Not Found",
          err: err,
        });
      }
  
      // result are the data returned by mysql server
      res.status(200).json({
        success: true,
        massage: `All the articles for the author: ${userId}`,
        results: results,
      });
    });
  };
  