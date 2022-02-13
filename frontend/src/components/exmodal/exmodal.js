import React, { useContext, useEffect, useState } from "react";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";


const Exmodal= () => {
    const [productId, setproductId] = useState([]);
    const User = localStorage.getItem("User");
    const getproductbyuserid = async () => {

    try {
        const res = await axios.get(`http://localhost:5000/product/byuser`,User);
        console.log(User);
        if (res.data.success) {
            setproductId(res.data.results)
        } else throw Error;
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
        getproductbyuserid();
      }, []);
    
    
    (             
        <div id="foundSearchContainer">
          {productId &&
            productId.map((elem, i) => {
              return (
                <div key={i} id="productid">
                  <h2>{elem.Product_Name}</h2>
                  
                </div>
              );
            })}
        </div>
       
    


    )
}
export default Exmodal;