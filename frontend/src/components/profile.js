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
      console.log(result.data.url);
      console.log(profileImg);
      console.log(typeof result.data.url);
      if (result.data.url) {
        console.log(result);

        console.log("space");
        console.log(profileImg);
        console.log(typeof result.data.url);
        setProfileImg(result.data.url);
        setUrlprofil(result.data.url);
        profilePicutue(result.data.url);
        console.log(urlprofil);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const profilePicutue = (img) => {
    console.log("USER ID : ", userId, " \nIMAGE URL : ", img);
    axios
      .put(`http://localhost:5000/profile/${userId}`, { img })
      .then((nateeja) => {
        console.log(nateeja);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const getUsersProducts = () => {
    axios.get(`http://localhost:5000/profile/${userId}`);
  };
  useEffect(() => {
    getAllInfo();
  }, []);
  return (
    <div className="profilePage">
      <div>{/* <button onClick={profilePicutue}>nateeja</button> */}</div>
      {status &&
        status.map((element, i) => {
          return (
            <div key={i} id="returnedInfo">
              <h1>welcome {element.Username}</h1>
              <div id="picHolder">
                <img id="actualPic" src={element.profileImg}></img>
              </div>
              <div id="buttons">
                <input
                  type={"file"}
                  onChange={(e) => {
                    setProfileImg(e.target.files[0]);
                  }}
                ></input>
                <button onClick={profilePic}>upload</button>
              </div>
              <br />
              <div id="textProfile">
                <p className="textProfile">User_name:</p>{" "}
                <h3 className="textProfile">"{element.Username}" </h3> <br />
                <p className="textProfile">Email:</p>{" "}
                <h3 className="textProfile">{element.email}</h3> <br />
                <p className="textProfile">Phone_number</p>
                <h3 className="textProfile">{element.Phone_number}</h3>
              </div>
              <button id="productsButton">Your products</button>
            </div>
          );
        })}
    </div>
  );
};
export default Profile;
