import React from "react";
import Button from "../../components/forms/Button";

import "./Home.css";

import herramientas from "./herramientas.png";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <section className="home">
      <div className="container grid">
        <div className="headline">
          <p className="title">
            <b>Alquiler Maquinas</b></p>
          <p className="content">
            <b>La mejor calidad con los mejores precios</b></p>
          <p className="support">¡Reserva ya la tuya!</p>

          <NavLink to= "/inventario" className="BotonReservar">
            <Button><b>Reservar</b></Button></NavLink>
        </div>
        <div className="herramientas">
          <img src={herramientas} alt="logoHome" ></img>
        </div>
      </div>
    </section>
  );
}

export default Home;
