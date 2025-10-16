import React from "react";
import { NavLink } from "react-router";
import Logo from "../assets/logo.png";
const Header = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">
          <img src={Logo} style={{ width: "40px", height: "40px" }} />
        </NavLink>
        <input type="text" placeholder="Search city" />
      </nav>
    </div>
  );
};

export default Header;
