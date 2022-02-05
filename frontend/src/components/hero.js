import { Link } from "react-router-dom";
import "./hero.css"

const Hero = ()=> {
return (
<>
   
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
       
   
        <div>First Register to have an account</div>
        <div>Second Login to your account</div>
        <div>Third Start Item Exchanging</div>
   
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