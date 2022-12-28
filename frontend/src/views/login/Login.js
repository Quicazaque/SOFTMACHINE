import React, { useContext, useState } from "react";
import Input from "../../components/forms/Input";
import Button from "../../components/forms/Button";
import Wirebutton from "../../components/forms/WireButton";
import { login } from "../../services/authService";
import "./Login.css";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import TokenContext from "../../contexts/TokenContext";
import { useCookies } from "react-cookie";

export default function Login() {
  const { setUser } = useContext(UserContext);
  const { setToken } = useContext(TokenContext);
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookies] = useCookies(["token, user"]);
  const navigate = useNavigate();

  async function onSubmit(event) {
    event.preventDefault();

    const token = await login(nombre, password);

    if (token) {
      setUser(nombre);
      setToken(token);
      setCookies("token", token, { path: "/", maxAge: 7 * 24 * 60 * 60});
      setCookies("user", nombre, { path: "/", maxAge: 7 * 24 * 60 * 60});
      navigate("/inventario/list");
    }

    //TEST LOGS
  }
  async function onSubmit2(event) {
    event.preventDefault();
    navigate("/signin");
  }

  function onButtonClick(evenet) {
    evenet.preventDefault();
  }
  return (
    <section className="login">
      <form onSubmit={onSubmit} className="flesx card form">
        <h1 className="title">Inicio de sesión</h1>

        <Input
          onChange={(v) => {
            setNombre(v.target.value);
          }}
        >
          <p className="textos">
            <b>Nombre:</b>
          </p>
        </Input>

        <Input
          type="password"
          value={password}
          onChange={(v) => setPassword(v.target.value)}
        >
          <p className="textos">
            <b>Contraseña:</b>
          </p>
        </Input>

        <Button onButtonClick={onButtonClick} type="submit" className="button">
          <b>Iniciar sesión</b>
        </Button>
      </form>
      <form onSubmit={onSubmit2}>
        <h2>
          ¿No tienes una cuenta?{" "}
          <Wirebutton onButtonClick={onButtonClick} className="Wirebutton">
            Registrate
          </Wirebutton>
        </h2>
      </form>
    </section>
  );
}
