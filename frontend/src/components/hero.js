import { Link } from "react-router-dom";
import "./hero.css"

const Hero = ()=> {
return (
<>
    <p>This is the Hero Page</p>
    <div className="NavBar" display="inline" color="blue">
<ul className="ul" >
      <li className="list" ><Link className="list" to="/home"><a className="">Home</a></Link>{" "}
      </li> 
      <li className="list" ><Link className="list" to="/login"><a className="">Login</a></Link>{" "}
      </li> 
</ul>
    </div>
    <div className="body">
        <img/>
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