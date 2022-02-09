import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../reducers/products/index";
import "./navBar.css";

const NavBar = () => {
  const state = useSelector((state) => {
    return {
      products: state.products.products,
      token: localStorage.getItem("token"),
    };
  });

  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [show, setShow] = useState(false);
  const [productsShower, setProductsShower] = useState([]);
  const [Product_Name, setProduct_Name] = useState("");
  const [found, setFound] = useState([]);
  const searchSmallerFunc = () => {
    console.log("inside search");
    axios
      .get(`http://localhost:5000/search/${Product_Name}`)
      .then((result) => {
        console.log(result.data.result);
        setFound(result.data.result);
        console.log(found);
      })
      .catch((err) => {
        console.log(err.response);
        console.log(err);
      });
  };
  return (
    <div>
      <div className="NavBar">
        <div className="logo">Xchange</div>
        <div>
          <Link className="Homelinks" to="/home">
            Home
          </Link>{" "}
        </div>
        <div>
          <Link className="Homelinks" to="/addProduct">
            Add Product
          </Link>{" "}
        </div>{" "}
        <div>
          <Link className="Homelinks" to="/category">
            Category
          </Link>{" "}
        </div>
        <div>
          {token ? (
            <div>
              <Link className="Homelinks" to="/logout">
                logout
              </Link>{" "}
            </div>
          ) : (
            <div>
              <Link className="Homelinks" to="/login">
                Login
              </Link>{" "}
            </div>
          )}
        </div>
      </div>
      <div id="searchBarHolder">
        <label>
          <input
            id="SearchBar"
            placeholder="Search"
            type={"text"}
            onChange={(e) => {
              console.log(e);
              setProduct_Name(e.target.value);
            }}
          />
          <button
            id="searchButtonS"
            onClick={() => {
              searchSmallerFunc();
              console.log(found);
              dispatch(setProducts(found));
            }}
          >
            Search
          </button>
        </label>
        {found.length ? (
          <div id="foundSearchContainer">
            {found &&
              found.map((elem, i) => {
                return (
                  <div key={i} id="foundPosts">
                    <h2>{elem.Product_Name}</h2>
                    <p>{elem.Description}</p>
                    <h6>{elem.Category}</h6>
                  </div>
                );
              })}
          </div>
        ) : (
          <div id="searchText">{/* <p>No items....</p> */}</div>
        )}
      </div>
    </div>
  );
};
export default NavBar;
