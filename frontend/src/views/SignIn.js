import React, { useState } from "react";
import Card from "../components/utils/Card";
import Input from "../components/forms/Input";
import Button from "../components/forms/Button";

export default function SignIn() {
  async function onSubmit(e) {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/inventario", {
      method: "POST",
      mode: "cors",
      headers: {
        nombre,
        tipo_de_documento,
        documento,
        edad,
        numeroTelefonico,
        ubicacion,
        correo,
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
  const [tipo_de_documento, setTipo_de_documento] = useState("");
  const [documento, setdocumento] = useState("");
  const [edad, setEdad] = useState("");
  const [numeroTelefonico, setNumeroTelefonico] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form onSubmit={onSubmit}>
      <h1>Registrate</h1>
      <Card>
        <h1>Nombre</h1>
        <Input
          onChange={(v) => {
            setNombre(v.target.value);
          }}
        >
          Nombre
        </Input>

        <h1>Tipo De Documento</h1>
        <Input
          onChange={(v) => {
            setTipo_de_documento(v.target.value);
          }}
        >
          tipo_de_documento
        </Input>

        <h1>Documento</h1>
        <Input
          onChange={(v) => {
            setdocumento(v.target.value);
          }}
        >
          Documento
        </Input>

        <h1>Edad</h1>
        <Input
          onChange={(v) => {
            setEdad(v.target.value);
          }}
        >
          edad
        </Input>

        <h1>Numero Telefonico</h1>
        <Input
          onChange={(v) => {
            setNumeroTelefonico(v.target.value);
          }}
        >
          numeroTelefonico
        </Input>

        <h1>Ubicacion</h1>
        <Input
          onChange={(v) => {
            setUbicacion(v.target.value);
          }}
        >
          ubicacion
        </Input>

        <h1>Correo</h1>
        <Input
          onChange={(v) => {
            setCorreo(v.target.value);
          }}
        >
          correo
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
          <b>Registrarse</b>
        </Button>
      </Card>
    </form>
  );
}
