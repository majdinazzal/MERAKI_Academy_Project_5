import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addProducts } from "../reducers/products/index";

import { AuthContext } from "./../context/auth";

//===============================================================

const NewOrder = () => {
  // const { token, isLoggedIn } = useContext(AuthContext);
  const history = useNavigate();

  const state = useSelector((state) => {
    return {
      token: state.loginReducer.token,
      isLoggedIn: state.loginReducer.isLoggedIn,
    };
  });

  const { token, isLoggedIn } = state;

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);

  //===============================================================

  const createNewOrder = async (e) => {
    e.preventDefault();
    try {
      const order = {
        Product_Name,
        Product_Price,
        Product_Description,
        Category,
      };
      const result = await axios.post("http://localhost:5000/orders", article, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (result.data.success) {
        setStatus(true);
        dispatch(addProducts({ orderName, description, Price, Category }));
        setMessage("The Order has been created successfully");
      }
    } catch (error) {
      if (!error.response.data.success) {
        setStatus(false);
        setMessage(error.response.data.message);
      }
    }
  };

  //===============================================================

  useEffect(() => {
    if (!isLoggedIn) {
      history("/dashboard");
    }
  });

  //===============================================================
  return (
    <>
      <form onSubmit={createNewOrder}>
        <br />
        <input
          type="text"
          placeholder="Product name here"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          placeholder="product description here"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <br />
        <button>Create New Order</button>
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

export default NewOrder;
