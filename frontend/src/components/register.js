import React, { useContext, useState } from "react";

import axios from "axios";

import { useSelector} from "react-redux";

// =================================================================
const Register = () => {
    const state = useSelector((state) => {
      return { isLoggedIn: state.loginReducer.isLoggedIn };
    });
  
    const [username, setusername] = useState("");
    const [phoneNumber, setphoneNumber] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const role_id = "1";
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(false);
    // =================================================================
//hi

    const addNewUser = async (e) => {
        e.preventDefault();
        try {
          const result = await axios.post("http://localhost:5000/users", {
            username,
            phoneNumber,
            email,
            password,
                     });
          if (result.data.success) {
            setStatus(true);
            setMessage("The user has been created successfully");
          } else throw Error;
        } catch (error) {
          setStatus(false);
          if (error.response && error.response.data) {
            return setMessage(error.response.data.message);
          }
          setMessage("Error happened while register, please try again");
        }
      };
    
      return (
        <>
          <div className="Form">
            {!state.isLoggedIn ? (
              <>
                <p className="Title">Register:</p>
                <form onSubmit={addNewUser}>
                  <br />
                  <input
                    type="text"
                    placeholder="user name"
                    onChange={(e) => setusername(e.target.value)}
                  />
                  <br />
                  <input
                    type="number"
                    placeholder="phone Number"
                    onChange={(e) => setphoneNumber(e.target.value)}
                  />
                  <br />
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
                  <button>Register</button>
                  <br />
                </form>
                {status
                  ? message && <div className="SuccessMessage">{message}</div>
                  : message && <div className="ErrorMessage">{message}</div>}
              </>
            ) : (
              <p>Logout First</p>
            )}
          </div>
        </>
      );
    };
    
    export default Register;
    