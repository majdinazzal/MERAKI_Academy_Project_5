import "./App.css";
import "./components/category.css";
import "./components/categories/clothes.css";
import "./components/addProduct.css";
import "./components/categories/categoriesFilter.css";
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
import SearchBar from "./components/search.js";
import AllCategories from "./components/category";
import Categories from "./components/categories/clothes";
import Vehicles from "./components/categories/Vehicles";
//=============================================================
import PC from "./components/categories/PC";
import Phones from "./components/categories/Phones";
import RealEstate from "./components/categories/RealEstate";
import Tools from "./components/categories/Tools";

function App() {
  return (
    <div className="App">
      <Routes>
        t <Route path="/vehicles" element={<Vehicles />} />{" "}
        <Route path="/categories" element={<Categories />} />{" "}
        <Route path="/search" element={<SearchBar />} />{" "}
        <Route path="/category" element={<AllCategories />} />
        <Route path="/addOrder" element={<NewOrder />} />
        <Route path="/addProduct" element={<NewProduct />} />
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<ShowProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/PC" element={<PC />} />{" "}
        <Route path="/Phones" element={<Phones />} />{" "}
        <Route path="/RealEstate" element={<RealEstate />} />{" "}
        <Route path="/Tools" element={<Tools />} />{" "}
      </Routes>
    </div>
  );
}

export default App;
