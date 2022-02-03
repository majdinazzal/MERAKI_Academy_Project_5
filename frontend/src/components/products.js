import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  addProducts,
  updateProduct,
  deletePorduct,
  setProducts,
} from "../reducers/products/index";
const Product = () => {
  const [showProduct, setShowProducts] = useState([]);
  const addProduct = (req, res) => {
    axios
      .get("http://localhost:5000/product/")
      .then((result) => {
        console.log(result);
        setShowProducts(result.data.results);

        // res.status(200).json({"hello"})
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>hello products</h1>

      <p>
        {showProduct.map((element, i) => {
          return <div key={i}>{element}</div>;
        })}
      </p>
      <button onClick={addProduct}></button>
    </div>
  );
};

export default Product;
