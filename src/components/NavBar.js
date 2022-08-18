import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

function NavBar() {
    return (
      <div className="nav_parent">
        <NavLink className="nav_links" to="/Register">
          Create Account
        </NavLink>
        <NavLink className="nav_links_1" to="/Login">
          Sign In
        </NavLink>
      </div>
    );
  } 

export default NavBar;