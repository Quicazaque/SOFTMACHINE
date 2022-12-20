import React from "react";
import Container from "../components/utils/Container";
import Button from "../components/forms/Button";
import "./home.css";
import Gap from "../components/utils/Gap";

function Home() {
  return (
    <section className="home">
      <Gap>5rem</Gap>
      <Container className="home">
        <h4>Alquiler Maquinas</h4>
        <Gap>2rem</Gap>
        <h1>la mejor calidad con los mejores precios</h1>
        <Gap>2rem</Gap>
        <p>reserva ya la tuya</p>
        <Button>Reservas</Button>
      </Container>
    </section>
  );
}

export default Home;
