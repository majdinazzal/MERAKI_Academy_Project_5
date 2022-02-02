import "./App.css";

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
