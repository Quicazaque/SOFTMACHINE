import React, { useState } from "react";

//import Gap from "./gap";
import Input from "../components/forms/Input";
import Button from "../components/forms/Button";
import { login } from "../services/authService";

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
    <form onSubmit={onSubmit}>
      <h1>Inica secion</h1>
      
        <h1>Nombre</h1>
        <Input
          onChange={(v) => {
            setNombre(v.target.value);
          }}
        >
          Nombre
        </Input>

        <h1>password</h1>
        <Input
          type="password"
          value={password}
          onChange={(v) => setPassword(v.target.value)}
        >
          password
        </Input>

        <Button type="submit">
          <b>Iniciar secion</b>
        </Button>
      
    </form>
  );
}
