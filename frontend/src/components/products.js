import React, { useContext, useEffect, useState } from "react";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  addProducts,
  updateProduct,
  deletePorduct,
  setProducts,
} from "../reducers/products/index";
//===============================================================

const ShowProduct = () => {
  // ---------------------------------------------
  const state = useSelector((state) => {
    return {
      products: state.products.products,
    };
  });

  const { token, products } = state;

  const dispatch = useDispatch();
  // ---------------------------------------------
  // const [articles, setArticles] = useState("");
  const [show, setShow] = useState(false);
  const [productsShower, setProductsShower] = useState([]);


  //===============================================================

  const allProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/product");
      console.log(res);
      if (res.data.success) {
        dispatch(setProducts(res.data.results));
        setProductsShower(res.data.results);
        setShow(true);
      } else throw Error;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allProducts();
  }, []);
  return (
    <div>
      <div>
        {" "}
        {productsShower &&
          productsShower.map((element, i) => {
            return (
              <div  key={i}>
                <p>{element.Product_Name}</p>
                <p>{element.id}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default ShowProduct;
