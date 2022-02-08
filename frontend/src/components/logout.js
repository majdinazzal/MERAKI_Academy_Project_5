import React, { useContext, useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";


const logout=()=>{
    return (
        <>
        <h>Are you sure you want to log out</h>
       <Link to = "/"> <button
        className=""
        onClick={() => {
          localStorage.clear();
        }}
      >
        Logout
      </button>
      </Link>

      </>
    )
}

export default logout