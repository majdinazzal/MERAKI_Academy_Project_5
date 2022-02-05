import { Link } from "react-router-dom";
import "./hero.css"

const Hero = ()=> {
return (
<>
    <p>This is the Hero Page</p>
<div className="logo">
    <h2>Xchange</h2>
</div>
    <div className="NavBar">
      <div ><Link to="/home"><a className="">Home</a></Link>{" "}
      </div> 
      <div><Link to="/login"><a className="">Login</a></Link>{" "}
      </div> 
    </div>
    <div className="body">
        <div></div>
        <div></div>
        <div className="icons">
        <div>First Register to have an account</div>
        <div>Second Login to your account</div>
        <div>Third Start Item Exchanging</div>
        </div>
            </div>
    <div className="Footer">
        <p>Meraki C4 </p>
        <p>Project Done By team A4 </p>
        <p> 2022 </p>
    </div>
</>
)
}

export default Hero;