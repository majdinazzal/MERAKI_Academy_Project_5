import "./App.css";
import { Route, Routes } from "react-router-dom";
// import components
import Hero from "./components/hero";
import Home from "./components/home";
import Login from "./components/login";
import AllProduct from "./components/products";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Product" element={<AllProduct />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
