import { Link } from "react-router-dom";
import "./hero.css";
import Login from "./login";
const Hero = ()=> {
return (
<>
   
<div className="logo">
</div>
    <div className="NavBar">
        <div className="logo">Xchange</div>
      <div ><Link to="/home"><a className="">Home</a></Link>{" "}
      </div> 
      <div><Link to="/login"><a className="">Login</a></Link>{" "}
      </div> 
    </div>
    <div className="body">
       
   
        <div> Register to have an account </div>
        <div> Login to your account </div>
        <div> Start Item Exchange </div>
            </div>
    <div className="Footer">
        <div>Meraki C4 </div>
        <div>Project Done By team A4 </div>
        <div> c 2022 </div>
    </div>
</>
)
}

export default Hero;