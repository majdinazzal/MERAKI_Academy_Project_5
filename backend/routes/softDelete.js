const sDelete = require("../controllers/softDelete");
const express = require("express");

const softDelRouter = express.Router();
//the main route is /softDel
softDelRouter.put("/:userId", sDelete);

module.exports = softDelRouter;
