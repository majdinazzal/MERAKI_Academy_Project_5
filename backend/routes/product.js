const express = require("express");
const {
  getAllProduct,
  createNewproduct,
  updateproductById,
  getproductByproductname,
  getproductByuser,
  deleteProductById,
  updateproductByname,
  updateproductexchange,
  updateproductrejected
} = require("../controllers/product");
const authentication = require("../middleware/authentication");
const productRouter = express.Router();

productRouter.get("/", getAllProduct);
// artecles/search_1?auther=1
productRouter.get("/byuser/:userId", getproductByuser);
productRouter.get("/", getproductByproductname);
productRouter.post("/", authentication, createNewproduct);
productRouter.put("/:id", updateproductById);
productRouter.delete("/:id", deleteProductById);
productRouter.put("/exchange/:id",updateproductByname)
productRouter.put("/exhange2/:id",updateproductexchange)
productRouter.put("/reject/:id")
// productRouter.delete("/:id", deleteArticleById);

module.exports = productRouter;
