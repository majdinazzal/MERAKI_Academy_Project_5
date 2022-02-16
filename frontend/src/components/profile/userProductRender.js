import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./profile.css";
const UserProducts = () => {
  const [allPrdcts, setAllPrdcts] = useState([]);
  const [id, setId] = useState("");
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
  const softDelete = (id) => {
    axios
      .post(`http://localhost:5000/softDel/${id}`, { userId })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(getUsersProducts, []);

  return (
    <div className="userProductRender">
      {/* <h1>afsf</h1> */}
      {allPrdcts &&
        allPrdcts.map((elem, i) => {
          return (
            <div className="userProductRender" key={i}>
              {" "}
              <br />
              Product name : {elem.Product_Name} <br />
              Product state : ({elem.state_product}) <br />
              <button
                className="profilerenderbutton"
                onClick={() => {
                  Swal.fire("description :", elem.Description, elem.Price);
                }}
              >
                More
              </button>
              <button className="profilerenderbutton"
                onClick={() => {
                  setId(elem.id);
                  softDelete(elem.id);
                }}
              >
                Accept
              </button>
              <button className="profilerenderbutton">reject</button>
              <br />
            </div>
            // flex display then flex then gap between the render and the button
          );
        })}{" "}
    </div>
  );
};
export default UserProducts;
