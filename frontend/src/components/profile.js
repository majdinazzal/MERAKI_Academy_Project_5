import React, { useState } from "react";

const Profile = () => {
  const [status, setStatus] = useState("");
  return (
    <div>
      <h1>profile page</h1>
      <form>
<input type={"text"} placeholder="enter status here"></input>

      </form>
    </div>
  );
};
export default Profile;
