import React from "react";
import { NavLink } from "react-router";
import Logo from "../assets/logo.png";
import history from "../assets/weatherHistory.png";
import style from "./Header.module.css";
const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.navbar}>
        <div className={style.logoSection}>
          <NavLink to="/">
            <img src={Logo} alt="Logo" className={style.logo} />
          </NavLink>
          <h1 className={style.title}>WeatherApp</h1>
        </div>

        <ul className={style.navLinks}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? style.active : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? style.active : "")}
            >
              About
            </NavLink>
          </li>
        </ul>

        <div className={style.iconSection}>
          <NavLink to="/quick-access-weather" title="Quick Access">
            <img src={history} alt="Quick Access" className={style.icon} />
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
