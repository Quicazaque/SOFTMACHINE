import React, { useContext, useEffect, useState } from "react";
import GetMachine from "./GetMachine";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import "./Machines.css";
import TokenContext from "../../contexts/TokenContext";
import { useCookies } from "react-cookie";

function Machine() {
  const { user } = useContext(UserContext);
  const { token } = useContext(TokenContext);
  const [cookies, setCookies] = useCookies(["token", "user"]);

  const currentUser = user ? user : cookies.user;
  const currentToken = token ? token : cookies.token;

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      return navigate("/login");
    }

    fetchPeticion();
  }, []);

  async function fetchPeticion() {
    const res = await fetch("http://localhost:8080/inventario/list");
    const documents = await res.json();
    //const documents = await GetMachine(currentToken);
    setDocuments(documents);
  }

  const [documents, setDocuments] = useState([]);

  return (
    <section className="panel">
      <div className="container">
        <h1>Inventario De Maquinas Y Herramientas</h1>
      </div>

      <div className="GetMaquinas card flex">
        {documents.map((element) => (
          <GetMachine data={element} key={element._id} />
        ))}
      </div>
    </section>
  );
}

export default Machine;
