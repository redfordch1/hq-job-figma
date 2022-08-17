import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function NavBar() {
    return (
      <div className="nav_parent">
        <Link className="nav_links" to="/Register">
          Create Account
        </Link>
        <Link className="nav_links" to="/Login">
          Sign In
        </Link>
      </div>
    );
  } 

export default NavBar;