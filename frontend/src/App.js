import "./App.css";
import { Route, Routes } from "react-router-dom";
// import components
import Hero from "./components/hero"
import Home from "./components/home"



function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element = {<Hero/>} />
      <Route path="/home" element = {<Home/>} />
     </Routes>
    </div>
  );
}

export default App;
