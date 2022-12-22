import React, { useEffect, useState } from "react";
import GetMachine from "./GetMachine";
import "./Machines.css";

function Machine() {

  async function fetchPeticion(){
    const res = await fetch("http://localhost:8080/inventario/list")
    const documents = await res.json()
    setDocuments(documents)
  }
  
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetchPeticion()
    
  }, []);

  return (
    <section className="panel">
      <div className="container">
        <h1>Inventaio De Maquinas</h1>
        </div>

        <div className="GetMaquinas card flex">
           {documents.map((element) => <GetMachine data={element}/> )}      
        
      </div>
    </section>
  );
}

export default Machine;
