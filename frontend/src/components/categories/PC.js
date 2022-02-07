import React from "react";
import { Route, Router, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const PC = () => {
  const [found, setFound] = useState([]);
  useEffect(() => {
    GetCategory("PC");
  }, []);
  const GetCategory = async (category) => {
    await axios
      .get(`http://localhost:5000/category/${category}`)
      .then((result) => {
        console.log(result);
        setFound(result.data.result);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <div>
      <div id="categoryNavBar">
        <Link className="categoryLinks" to={"/"}>
          <h2 id="logoCategory">Xchange</h2>
        </Link>
        <div id="categoryLinksDiv">
          <Link className="categoryLinks" to={"/Home"}>
            Home
          </Link>
          <Link className="categoryLinks" to={"/addproduct"}>
            add Product
          </Link>
          <Link className="categoryLinks" to={"/login"}>
            login
          </Link>
        </div>
      </div>
      <div id="renderedContainer">
        {found.map((elem, i) => {
          return (
            <div id="renderdCategory" key={i}>
              {" "}
              <h3 id="title" className="text">
                title:{elem.Product_Name}
              </h3>
              <p className="text">description:{elem.Description}</p>
              <p className="text">
                price:{elem.Price}JD , Category:{elem.Category}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PC;
