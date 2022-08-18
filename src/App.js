import './App.css';
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
        <div className="App">
            <a href="/">
              <img className="D_img" src="davincilogo.png" alt="Davinci Logo" />
            </a>
            <NavBar />
            <Routes>
                <Route exact path="/"/>
                <Route path="/Register" element={<Register/>} />
                <Route path="/Login" element={<Login/>} />
            </Routes>
        </div>
  );
}

export default App;
