import './App.css';
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <img src="davincilogo.png" alt="Davinci Logo" />
     <NavBar />
     <Routes>
      <Route path="/Register" element={<Register/>} />
      <Route path="/Login" element={<Login/>} />
     </Routes>
    </div>
  );
}

export default App;
