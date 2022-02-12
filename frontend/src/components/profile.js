import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [status, setStatus] = useState("");
  const userId = localStorage.getItem("User");
  const getAllInfo = (req, res) => {
    axios
      .get(`http://localhost:5000/profile/${userId}`)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllInfo();
  }, []);
  return (
    <div>
      <h1>profile page</h1>
      <form>
        <input type={"text"} placeholder="Change user name"></input>
      </form>
    </div>
  );
};
export default Profile;
