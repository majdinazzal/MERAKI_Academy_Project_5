import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./profile.css";
const UserProducts = () => {
  const [allPrdcts, setAllPrdcts] = useState([]);
  const [id, setId] = useState("");
  const [Show, setShow] = useState([])
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
        getUsersProducts()
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const rejected = (id) => {
    console.log(typeof id);
    let ids = id.toString();
    console.log(ids);
    axios
      .put(`http://localhost:5000/product/reject/${ids}`)
      .then((result) => {
        console.log(result);
        getUsersProducts()
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getexchangeproduct = (idex) => {
    axios
      .get(`http://localhost:5000/product/show/${idex}`)
      .then((result) => {
        console.log(result);
        setShow(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // const ex =(id)=>{
  //   getexchangeproduct(id)
  // }


  useEffect(() => {
    getUsersProducts();
  }, []);

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
                className="profilebutton"
                onClick={() => {
                  Swal.fire("description :", elem.Description, elem.Price);
                }}
              >
                more
              </button>
              {elem.state_product == "pending" && (
                <>

              <button
                onClick={() => {
                  setId(elem.id);
                  softDelete(elem.id);
                }}
              >
                accept
              </button>
              <button onClick={()=>{rejected(elem.id)}}>reject</button>
              <br />
              </>
              )}
              =====================================
            </div>
            // flex display then flex then gap between the render and the button
          );
        })}{" "}
    </div>
  );
};
export default UserProducts;
