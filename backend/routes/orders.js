const { getAllOrders } = require("../controllers/orders");

const express = require("express");

const ordersR = express.Router();

//the main route is "/orders"

ordersR.get("/all", getAllOrders);

module.exports = ordersR;

//branch name ordersRouter


