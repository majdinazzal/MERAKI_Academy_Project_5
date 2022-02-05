import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addProducts } from "../reducers/products/index";

// import { AuthContext } from "./context";

//===============================================================

const NewProduct = () => {
  // const { token, isLoggedIn } = useContext(AuthContext);
  const history = useNavigate();

  const state = useSelector((state) => {
    return {
      token: state.loginReducer.token,
      isLoggedIn: state.loginReducer.isLoggedIn,
    };
  });
//hi

  const { token, isLoggedIn } = state;

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);
  const [Product_Name, setProduct_Name] = useState("");
  const [Price, setPrice] = useState();
  const [Description, setDescription] = useState("");
  const [Category, setCategory] = useState("");
  // const product = {
  //   product_Name,
  //   product_Price,
  //   product_Description,
  //   category,
  // }; //===============================================================

  const createNewProduct = async (e) => {
    e.preventDefault();
    try {
      const product = {
        Product_Name,
        Price,
        Description,
        Category,
      };
      const result = await axios.post(
        "http://localhost:5000/product",
        {
          Product_Name,
          Price,
          Description,
          Category,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (result.data.success) {
        setStatus(true);
        dispatch(
          addProducts({
            Product_Name,
            Description,
            Price,
            Category,
          })
        );
        setMessage("The product has been created successfully");
      }
    } catch (error) {
      if (!error.response.data.success) {
        setStatus(false);
        setMessage(error.response.data.message);
      }
    }
  };

  //===============================================================
  // const createNewProduct = () => {
  //   axios
  //     .post("http://localhost:5000/product", product)
  //     .then((result) => {
  //       // console.log(token);
  //       console.log(result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  //===============================================================

  useEffect(() => {
    if (!isLoggedIn) {
      history("/dashboard");
    }
  });
//hi

  //===============================================================
  return (
    // <div>
    //   <h1>hello product</h1>
    // </div>
    <>
      <form onSubmit={createNewProduct}>
        <br />
        <input
          type="text"
          placeholder="Product name here"
          onChange={(e) => setProduct_Name(e.target.value)}
        />
        <br />
        <textarea
          placeholder="product description here"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <br />
        <textarea
          placeholder="product price here"
          onChange={(e) => setPrice(e.target.value)}
        ></textarea>
        <br />
        <button>Create New product</button>
      </form>
      <br />
      {status
        ? message && (
            <div className="SuccessMessage">
              {message} && <p>{console.log(status)}</p>
            </div>
          )
        : message && (
            <div className="ErrorMessage">
              {message}
              <p>{console.log(status)}</p>
            </div>
          )}
    </>
  );
};

export default NewProduct;
