import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Checkbox from "../checkbox/checkbox";

const Exmodal = () => {
  const [productId, setproductId] = useState([]);
  const userId = localStorage.getItem("User");
  const [Product_Name, setProduct_Name] = useState("");
  const [state_product, setState_product] = useState("pending");

  const confirm = (elem) => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        setProduct_Name(elem.Product_Name);
        console.log(elem.Product_Name);
        updateProductbyname(elem.Product_Name);
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  const updateProductbyname = async (Product_Name) => {
    try {
      await axios.put(`http://localhost:5000/product}`, {
        Product_Name,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getUsersProducts = () => {
    axios
      .get(`http://localhost:5000/product/byuser/${userId}`)
      .then((result) => {
        console.log(result);
        setproductId(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getUsersProducts();
  }, []);

  const confirm = (elem) => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        setProduct_Name(elem.Product_Name);
        console.log(elem.Product_Name);
        // setid(elem.id)
        console.log(elem.id);
        // console.log(id)
        updateProductbyid(elem.id);
        //just  updateProductbyid(from local storage)
        ///save id from local storage
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  const updateProductbyid = (id) => {
    console.log(typeof id);
    let ids = id.toString();
    console.log(ids);
    axios
      .put(`http://localhost:5000/product/exchange/${ids}`)

      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // updateProductbyid(6)

  const getUsersProducts = () => {
    axios
      .get(`http://localhost:5000/product/byuser/${userId}`)
      .then((result) => {
        console.log(result);
        setproductId(result.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getUsersProducts();
  }, []);

  return (
    <div id="foundSearchContainer">
      {productId &&
        productId.map((elem, i) => {
          return (
            <div key={i} id="productid">
              <h2>{elem.Product_Name}</h2>
              <button
                onClick={() => {
                  confirm(elem);
                }}
              >
                exchange
              </button>
            </div>
          );
        })}
    </div>
  );
};
export default Exmodal;
