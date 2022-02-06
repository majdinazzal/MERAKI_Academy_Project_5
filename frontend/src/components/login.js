import React, { useContext, useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"

import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../reducers/login";
//===============================================================
export const UserContext = createContext();
const Login = () => {
  const history = useNavigate();

  // ---------------------------------------------
  const state = useSelector((state) => {
    return { isLoggedIn: state.loginReducer.isLoggedIn };
  });

  const dispatch = useDispatch();
  // ---------------------------------------------
//hi

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);
  // const [saveToken, setSaveToken] = useState("");
  //===============================================================

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      if (res.data) {
        setMessage("true");
        localStorage.setItem("token", res.data);
        // setSaveToken(res.data.token);
        dispatch(login(res.data));
      } else throw Error;
    } catch (error) {
      if (error.response && error.response.data) {
        return setMessage(error.response.data.message);
      }
      setMessage("Error happened while Login, please try again");
    }
  };

  useEffect(() => {
    if (state.isLoggedIn) {
      history("/Home");
    } else history("/login");
  }, [state.isLoggedIn]);

  //===============================================================

  return (
    <>
    <head>
	<title>Slide Navbar</title>
	<link rel="stylesheet" type="text/css" href="slide navbar style.css"/>
<link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet"/>
</head>

<div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>
    <div class="login">
				<form  onSubmit={loginUser}>
					<label for="chk" aria-hidden="true">Login</label>
					<input  onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" required=""/>
					<input  onChange={(e) => setPassword(e.target.value)} type="password" name="pswd" placeholder="Password" required=""/>
					<button>Login</button>
				</form>
			</div>

      {/* <div className="Form">
        <p className="Title">Login:</p>
        <form onSubmit={loginUser}>
          <br />

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button>Login</button>
        </form>

        {status
          ? message && <div className="SuccessMessage">{message}</div>
          : message && <div className="ErrorMessage">{message}</div>} */}
      </div>
    </>
  );
};

export default Login;
