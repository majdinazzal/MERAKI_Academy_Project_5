import React, { useContext, useEffect, useState } from "react";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../reducers/products/index";
import "./home.css";
import { Link } from "react-router-dom";
const Home = () => {
  const state = useSelector((state) => {
    return {
      products: state.products.products,
    };
  });

  const { token, products } = state;

  const dispatch = useDispatch();
  // ---------------------------------------------
  const [show, setShow] = useState(false);
  const [productsShower, setProductsShower] = useState([]);
  const [Product_Name, setProduct_Name] = useState("");
  const [found, setFound] = useState([]);

  //===============================================================
  //hi
  const searchFix = (Product_Name) => {
    // console.log("inside search");
    axios
      .get(`http://localhost:5000/search/${Product_Name}`)
      .then((result) => {
        console.log(result.data);
        setFound(result.data.posts);
      })
      .catch((err) => {
        console.log(err.response);
        console.log(err);
      });
  };
  // useEffect(() => {
  //   searchFix("wwww");
  // }, []);
  // setFound(['wwww'])
  const searchFunc = () => {
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
  const allProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/product");
      if (res.data.success) {
        dispatch(setProducts(res.data.results));
        setProductsShower(res.data.results);
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
        </div>
        <div>
          <Link className="Homelinks" to="/category">
            Category
          </Link>{" "}
        </div>
        <div>
          <Link className="Homelinks" to="/login">
            Login
          </Link>{" "}
        </div>

      </div>
      <div className="Searchbar">
        <div>
          <label>
            <input
              className="inputsearch"
              placeholder="Search"
              type={"text"}
              onChange={(e) => {
                console.log(e);
                setProduct_Name(e.target.value);
              }}
            />
            <button
              onClick={() => {
                searchFunc();
                console.log(found);
              }}
            >
              Search
            </button>
          </label>
          </div>
          <br />

          {found.length ? (
            //length is not defined???
            <div>
              {found.map((elem) => {
                console.log(elem);
                return (
                  <div key={elem.id}>
                    <h2>{elem.Product_Name}</h2>
                    {/* <p>{elem}</p>
                      <h6>{elem}</h6> */}
                  </div>
                );
              })}
            </div>
          ) : (
            <p></p>
          )}
        </div>
      <div className="product">
        {" "}
        {productsShower &&
          productsShower.map((element, i) => {
            return (
              <div className="productelement" id="renderProduct" key={i}>
                <img
                  className="productimage"
                  src="https://www.notebookcheck.net/fileadmin/_processed_/c/d/csm_Produktfotos_Apple_iPhone_13_Pro_1448_0001583eaa.jpg"
                />
                <p>{element.Product_Name}</p>
                <p>{element.Product_Description}</p>{" "}
                <p>{element.ProductPrice}</p> <p>{element.Category}</p>
              </div>
            );
          })}
      </div>
      <div className="Footer">
        <div>Meraki C4 </div>
        <div>Project Done By team A4 </div>
        <div> c 2022 </div>
      </div>
    </div>
  );
};

export default Home;
