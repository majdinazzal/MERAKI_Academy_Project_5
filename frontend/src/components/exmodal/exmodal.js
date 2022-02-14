import React, { useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Checkbox from "../checkbox/checkbox"

const Exmodal= () => {
    const [productId, setproductId] = useState([]);
    const userId = localStorage.getItem("User");
    
    const confirm = () => {
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {

              Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
        }          
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
            
          {productId &&
            productId.map((elem, i) => {
              return (
                  
                <div key={i} id="productid">
                   
                   <h2>{elem.Product_Name}</h2>
                   <button onClick={confirm}>exchange</button>
         
        

                  {/* <h2>{elem.Product_Name}</h2> */}
                  
                </div>
              );
            })}
             
        </div>
       
    


    )
}
export default Exmodal;