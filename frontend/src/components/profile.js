import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [status, setStatus] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [urlprofil, setUrlprofil] = useState("");
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
  const profilePic = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("file", profileImg);
      data.append("upload_preset", "whatEver");
      data.append("cloud_name", "abdullahhalammoush");

      const result = await axios.post(
        "https://api.cloudinary.com/v1_1/abdullahhalammoush/image/upload",
        data
      );
      console.log(result);
      console.log(profileImg);
      console.log(typeof result.data.url);
      if (result.data.url) {
        console.log(result);

        console.log("space");
        console.log(profileImg);
        console.log(typeof result.data.url);
        setProfileImg(result.data.url);
        setUrlprofil(result.data.url);
        console.log(urlprofil);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // const profilePicutue = () => {
  //   axios
  //     .put(`http://localhost:5000/profile/${userId}`, urlprofil)
  //     .then((nateeja) => {
  //       console.log(nateeja);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  useEffect(() => {
    getAllInfo();
  }, []);
  return (
    <div className="profilePage">
      <div id="pic">any</div>
      <div id="buttons">
        <input
          type={"file"}
          onChange={(e) => {
            setProfileImg(e.target.files[0]);
          }}
        ></input>
        <button onClick={profilePic}>upload</button>
      </div>
      <div>{/* <button onClick={profilePicutue}>nateeja</button> */}</div>
      {status &&
        status.map((element, i) => {
          return (
            <div key={i} id="returnedInfo">
              <h1>welcome {element.Username}</h1>
              <br />
              User_name: <h3>"{element.Username}" </h3> <br />
              Email:<h3>{element.email}</h3> <br />
              Phone_number<h3>{element.Phone_number}</h3>
            </div>
          );
        })}
    </div>
  );
};
export default Profile;
