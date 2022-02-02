import "./App.css";
import { Route, Routes } from "react-router-dom";
// import components
import Hero from "./components/hero"


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element = {<Hero/>} />
     </Routes>
    </div>
  );
}

export default App;
