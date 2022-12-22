import React, { useState } from "react";
import Input from "../../components/forms/Input";
import Button from "../../components/forms/Button";
import { login } from "../../services/authService";

import "./Login.css";

export default function Login() {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(event) {
    event.preventDefault();

    //TEST LOGS
    console.log(nombre);
    console.log(password);

    const token = await login(nombre, password);
    console.log(token);
  }
  return (
    <section className="login">
      <form onSubmit={onSubmit} className="flesx card form">
        <p className="title"><h1>Inicio de sesión</h1></p>

        <Input
          onChange={(v) => {
            setNombre(v.target.value)}}><p className="textos"><b>Nombre:</b></p>
        </Input>

        <Input
          type="password"
          value={password}
          onChange={(v) => setPassword(v.target.value)}
        ><p className="textos">
          <b>Contraseña:</b></p>
        </Input>

        <Button type="submit" className="button">
          <b>Iniciar sesión</b>
        </Button>
      </form>
    </section>
  );
}
