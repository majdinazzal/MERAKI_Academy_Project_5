const express = require("express");
const {
  getAllProduct,
  createNewproduct,
  updateproductById,
  getproductByproductname,
  getproductByuser,
  deleteProductById,
} = require("../controllers/product");
const authentication = require("../middleware/authentication");
const productRouter = express.Router();

productRouter.get("/", getAllProduct);
// artecles/search_1?auther=1
productRouter.get("/search_1", getproductByuser);
productRouter.get("/", getproductByproductname);
productRouter.post("/", authentication, createNewproduct);
productRouter.put("/:id", updateproductById);
productRouter.delete("/del/:id", deleteProductById);
// productRouter.delete("/:id", deleteArticleById);

module.exports = productRouter;
