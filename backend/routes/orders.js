const { getAllOrders } = require("../controllers/orders");

const express = require("express");

const ordersR = express.Router();

ordersR.get("/allOrders", getAllOrders);


