import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const UserProducts = () => {
  const [allPrdcts, setAllPrdcts] = useState([]);
  const userId = localStorage.getItem("User");
  const getUsersProducts = () => {
    axios
      .get(`http://localhost:5000/product/byuser/${userId}`)
      .then((result) => {
        console.log(result);
        setAllPrdcts(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(getUsersProducts, []);

  return (
    <div>
      {/* <h1>afsf</h1> */}
      {allPrdcts &&
        allPrdcts.map((elem, i) => {
          return (
            <div key={i}>
              {" "}
              <br />
              {elem.Product_Name}
              <button>2pac</button>
            </div>
            // flex display then flex then gap between the render and the button
          );
        })}{" "}
    </div>
  );
};
export default UserProducts;
