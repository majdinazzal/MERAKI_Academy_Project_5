const express = require("express");
const profile = require("../controllers/profileBE");
const profileRouter = express.Router();
//main route is /profile
profileRouter.get("/:userId", profile);
module.exports = profileRouter;
