import React, { useContext, useEffect, useState } from "react";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";


const Exmodal= () => {
    const User = localStorage.getItem("User");
    const getproductbyuserid = async () => {

    try {
        const res = await axios.get(`http://localhost:5000/product/byuser`,User);
        console.log(User);
        if (res.data.success) {
          
        } else throw Error;
      } catch (error) {
        console.log(error);
      }
    };
  
    return
}