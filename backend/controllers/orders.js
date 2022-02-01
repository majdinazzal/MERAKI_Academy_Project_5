const connection = require("../database/db");
const db = require("../database/db");

const getAllOrders=(req,res)=>{

const query=`select * from orders`;

connection.query(query,(err,result)=>{

console.log(result);



})





}
