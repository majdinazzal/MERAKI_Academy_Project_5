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
        {/* <div class="searchBox">

<input class="searchInput"type="text" name="" placeholder="Search"/>
<button class="searchButton" href="#">
    <i class="material-icons">
        search
    </i>
</button>
</div> */}

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
      <div class="searchBox">

<input             onChange={(e) => {
              console.log(e);
              setProduct_Name(e.target.value);
            }}
 class="searchInput"type="text" name="" placeholder="Search"/>
<button             onClick={() => {
              searchSmallerFunc();
              console.log(found);
              dispatch(setProducts(found));
            }}
 class="searchButton" href="#">
    <i class="material-icons">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search-heart-fill" viewBox="0 0 16 16">
  <path d="M6.5 13a6.474 6.474 0 0 0 3.845-1.258h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.008 1.008 0 0 0-.115-.1A6.471 6.471 0 0 0 13 6.5 6.502 6.502 0 0 0 6.5 0a6.5 6.5 0 1 0 0 13Zm0-8.518c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"/>
</svg>
    </i>
</button>
</div>


      
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
    
  );
};
export default NavBar;
