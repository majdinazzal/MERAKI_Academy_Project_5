import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [status, setStatus] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [url, setUrl] = useState("");
  const userId = localStorage.getItem("User");
  const getAllInfo = (req, res) => {
    axios
      .get(`http://localhost:5000/profile/${userId}`)
      .then((result) => {
        console.log(result);
        setStatus(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const profilePic = () => {
    const data = new FormData();



    
  };
  useEffect(() => {
    getAllInfo();
  }, []);
  return (
    <div className="profilePage">
      {status &&
        status.map((element, i) => {
          return (
            <div key={i}>
              <h1>welcome {element.Username}</h1>
              <h3>"{element.Username}" Information</h3>
              <h3>{element.email}</h3>
              <h3>{element.Phone_number}</h3>
            </div>
          );
        })}
    </div>
  );
};
export default Profile;
