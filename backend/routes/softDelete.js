const sDelete = require("../controllers/softDelete");
const express = require("express");

const softDelRouter = express.Router();

softDelRouter.put("/", sDelete);

module.exports = softDelRouter;
