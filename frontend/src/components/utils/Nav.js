import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Logo from "../../assets/Logo";
import { Link } from "react-router-dom";
import "./components.css";

function Nav() {
  return (
    <nav className="nav">
      <Container>
        <Flex className="nav">
          <Logo></Logo>
          <Link to="/">
            <b>Inicio</b>
          </Link>
          <Link to="/login">
            <b>Inicio de secion</b>
          </Link>
          <Link to="/inventario">
            <b>Maquinas</b>
          </Link>
          <Link to="/sign in">
            <b>Registrarse</b>
          </Link>
        </Flex>
      </Container>
    </nav>
  );
}

export default Nav;
