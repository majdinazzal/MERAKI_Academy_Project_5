const connection = require("../database/db");
const db = require("../database/db");

const search = (req, res) => {
    const Product_Name = req.params.Product_Name;
    const query = `select * from products where Product_Name =${Product_Name}`;
    const data = [Product_Name];
    connection.query(query, data, (err, result) => {
        
    });
};
module.exports = { search };
