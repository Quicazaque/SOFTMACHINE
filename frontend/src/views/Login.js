import React, { useState } from "react";
import Card from "../components/utils/Card";
//import Gap from "./gap";
import Input from "../components/forms/Input";
import Button from "../components/forms/Button";

export default function Login() {
  async function onSubmit(e) {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/login", {
      method: "GET",
      mode: "cors",
      headers: {
        nombre,
        password,
      },
    });
    if (res.ok) {
      console.log("entrando");
      const doc = await res.json();
      console.log(doc);
      alert(doc.message);
    } else {
      alert("error");
    }
  }

  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={onSubmit}>
      
      <h1>Inica secion</h1>
      <Card>
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
      </Card>
    </form>
  );
}
