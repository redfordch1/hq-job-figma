import './App.css';
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <h1 className="main_title">DAVINCI</h1>
     <NavBar />
     <Routes>
      <Route path="/Register" element={<Register/>} />
      <Route path="/Login" element={<Login/>} />
     </Routes>
    </div>
  );
}

export default App;
