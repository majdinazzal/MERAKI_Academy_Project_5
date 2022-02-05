import { Link } from "react-router-dom";
import "./hero.css"

const Hero = ()=> {
return (
<>
    <p>This is the Hero Page</p>
    <div className="NavBar">
      <div><Link className="list" to="/home"><a className="">Home</a></Link>{" "}
      </div> 
      <div><Link className="list" to="/login"><a className="">Login</a></Link>{" "}
      </div> 
    </div>
    <div className="body">
        <img/>
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