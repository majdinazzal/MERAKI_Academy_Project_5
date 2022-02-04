import "./App.css";
import { Route, Routes } from "react-router-dom";
// import components

import Hero from "./components/hero";
import Home from "./components/home";
import Product from "./components/products";
import Login from "./components/login"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
         <Route path="/login" element = {<Login/>} />
      </Routes>


    </div>
  );
}

export default App;
