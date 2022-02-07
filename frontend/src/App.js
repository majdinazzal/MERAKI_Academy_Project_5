import "./App.css";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "./components/login";
import { useContext } from "react";
// import components

import Hero from "./components/hero";
import Home from "./components/home";
import Login from "./components/login";
import ShowProduct from "./components/products";
import NewProduct from "./components/addProducts";
import NewOrder from "./components/addOrders";

import AllCategories from "./components/category";
import Categories from "./components/categories/clothes";

function App() {
  return (
    <div className="App">
      <Routes>
        {" "}
        <Route path="/categories" element={<Categories />} />{" "}
        <Route path="/category" element={<AllCategories />} />
        <Route path="/addOrder" element={<NewOrder />} />
        <Route path="/addProduct" element={<NewProduct />} />
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<ShowProduct />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
