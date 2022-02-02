const { getAllOrders, addOrders } = require("../controllers/orders");

const express = require("express");

const ordersR = express.Router();


//the main route is "/orders"
ordersR.get("/all", getAllOrders);
// ordersR.post("add",)
module.exports = ordersR;
//branch name ordersRouter

