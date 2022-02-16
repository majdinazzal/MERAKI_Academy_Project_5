import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
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
  const softDelete = () => {
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
    <div>
      {/* <h1>afsf</h1> */}
      {allPrdcts &&
        allPrdcts.map((elem, i) => {
          return (
            <div key={i}>
              {" "}
              <br />
              product name : {elem.Product_Name} <br />
              product state : ({elem.state_product}) <br />
              <button
                onClick={() => {
                  Swal.fire("description :", elem.Description, elem.Price);
                }}
              >
                more
              </button>
              <button
                onClick={() => {
                  setId(elem.id);
                  softDelete();
                }}
              >
                accept
              </button>
              <button>reject</button>
              <br />
              =====================================
            </div>
            // flex display then flex then gap between the render and the button
          );
        })}{" "}
    </div>
  );
};
export default UserProducts;
