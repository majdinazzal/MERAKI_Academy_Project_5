import React, { useContext, useEffect, useState } from "react";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";


const Exmodal= () => {
    const [productId, setproductId] = useState([]);
    const userId = localStorage.getItem("User");
    const [checkedOne, setCheckedOne] = useState(false);
    const updateOne = () => {       console.log("aaaaa");
   setCheckedOne(!checkedOne)};
    const [checkedTwo, setCheckedTwo] = useState(true);
  
    const getUsersProducts = () => {
        axios
          .get(`http://localhost:5000/product/byuser/${userId}`)
          .then((result) => {
            console.log(result);
            setproductId(result.data.results)
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
              <select >
         <option>Select Options</option>
          {productId &&
            productId.map((elem, i) => {
              return (
                  
                <div key={i} id="productid">
             
         
         
        

                  {/* <h2>{elem.Product_Name}</h2> */}
                  
                </div>
              );
            })}
             </select> <br /><br />
        </div>
       
    


    )
}
export default Exmodal;