import React from "react";
import Button from "../components/forms/Button";
import "./home.css";

function Home() {
  return (
    <section className="home">
      <div className="container">
        <h4>Alquiler Maquinas</h4>
        <h1>la mejor calidad con los mejores precios</h1>
        <p>reserva ya la tuya</p>
        <Button>Reservas</Button>
      </div>
    </section>
  );
}

export default Home;
