import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Categories = () => {
  const [found, setFound] = useState([]);
  useEffect(() => {
    GetCategory("clothes");
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
    <div id="renderedContainer">
      {found.map((elem, i) => {
        return (
          <div id="renderdCategory" key={i}>
            {" "}
            <h1>hello</h1>
            <h3>title:{elem.Product_Name}</h3>
            <p>description:{elem.Description}</p>
            <p>price:{elem.Price}JD</p>
            <p>Category:{elem.Category}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
