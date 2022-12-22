import React from "react";
import Logo from "../../assets/Logo";
import { Link } from "react-router-dom";

//import Button from "../forms/Button";

import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <ul className="container flex">
        <li>
          <Logo></Logo>
        </li>
        <li>
          <Link to="/" >Inicio</Link>
        </li>
        <li>
          <Link to="/inventario/list">Maquinas</Link>
        </li>
        <li>
          <Link to="/login">Inicio de sesión</Link>
        </li>
        
        <li>
          <Link to="/sign in">Registrarse</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
