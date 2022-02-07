import React, { useContext, useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";

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
      history("/login");
    }
  });

  //===============================================================
  return (
    <div id="addProductBackGround">
      <>
        <div id="categoryNavBar">
          <Link className="categoryLinks" to={"/"}>
            <h2 id="logoCategory">Xchange</h2>
          </Link>
          <div id="categoryLinksDiv">
            <Link className="categoryLinks" to={"/Home"}>
              Home
            </Link>
            <Link className="categoryLinks" to={"/category"}>
              category
            </Link>
            <Link className="categoryLinks" to={"/addproduct"}>
              add Product
            </Link>
            {state.token ? (
              <Link className="categoryLinks" to={"/logout"}>
                logout
              </Link>
            ) : (
              <Link className="categoryLinks" to={"/login"}>
                login
              </Link>
            )}
          </div>
        </div>
        <form id="form" onSubmit={createNewProduct}>
          <br />
          <input
            id="postTitle"
            type="text"
            placeholder="Product name here"
            onChange={(e) => setProduct_Name(e.target.value)}
          />
          <br />
          <textarea
            id="PostDescription"
            placeholder="product description here"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <br />
          <textarea
            id="PostPrice"
            placeholder="product price here"
            onChange={(e) => setPrice(e.target.value)}
          ></textarea>
          <br />
          <div>
            <select
              id="categorySelector"
              placeholder="category"
              id="categorySelector"
              onClick={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option>vehicles</option>
              <option>clothes</option>
              <option>pc</option>
              <option>phones</option>
              <option>tools</option>
              <option>realEstate</option> options
            </select>
          </div>{" "}
          <button id="createPost">Create New product</button>
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
    </div>
  );
};

export default NewProduct;
//5.2.11.36
