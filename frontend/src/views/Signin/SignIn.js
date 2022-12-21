import React, { useState } from "react";

import Input from "../../components/forms/Input";
import Button from "../../components/forms/Button";
import "./SignIn.css"

export default function SignIn() {
  async function onSubmit(e) {
    e.preventDefault();

    const res = await fetch("http://localhost:8080/inventario", {
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
    <section className="registro">
    <form onSubmit={onSubmit } className="flex card form">

      <p><h1>Registrate</h1></p>
      
        
        <Input onChange={(v) => {setNombre(v.target.value)}}><p className="textos"><b>Nombre:</b></p></Input>

        
        <Input onChange={(v) => {setTipo_de_documento(v.target.value)}}><p className="textos"><b>Tipo De Documento:</b></p></Input>

       
        <Input onChange={(v) => {setdocumento(v.target.value)}}><p className="textos"><b>Documento:</b></p></Input>

        
        <Input onChange={(v) => {setEdad(v.target.value)}}><p className="textos"><b>Edad:</b></p></Input>

    
        <Input onChange={(v) => {setNumeroTelefonico(v.target.value)}}><p className="textos"><b>Numero Telefonico:</b></p></Input>

       
        <Input onChange={(v) => {setUbicacion(v.target.value)}}><p className="textos"><b>Ubicacion:</b></p></Input>

        
        <Input onChange={(v) => {setCorreo(v.target.value)}}><p className="textos"><b>Correo:</b></p></Input>

       
        <Input type="password" value={password} onChange={(v) => setPassword(v.target.value)}><p className="textos"><b>Contraseña:</b></p></Input>

        <Button type="submit" className="button">
          <b>Registrarse</b>
        </Button>
      
    </form>
    </section>
  );
}
