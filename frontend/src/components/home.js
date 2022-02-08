import React, { useContext, useEffect, useState } from "react";
// import Rating from "react-rating";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../reducers/products/index";
import "./home.css";
import { Link } from "react-router-dom";


const Home = () => {
  const state = useSelector((state) => {
    return {
      products: state.products.products,
      isLoggedIn: state.loginReducer.isLoggedIn,
    };
  });
  const token = localStorage.getItem("token");
  const { isLoggedIn, products } = state;

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
          <Link to={"/search"}>
            <svg
              id="searchIcon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </Link>
        </div>

        
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
        {console.log(token)}
        { token ?  <div>
          <Link className="Homelinks" to="/logout">
            Logout
          </Link>{" "}
        </div> :  <div>
          <Link className="Homelinks" to="/login">
            login
          </Link>{" "}
        </div>  }
        

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
      {/* <Rating
  emptySymbol={<span className="icon-text">-</span>}
  fullSymbol={[1,2,3,4,5].map(n => <span className="icon-text">{n}</span>)}
/> */}
      <div className="Footer">
        <div>Meraki C4 </div>
        <div>Project Done By team A4 </div>
        <div> c 2022 </div>
      </div>
    </div>
  );
};

export default Home;
