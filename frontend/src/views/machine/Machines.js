import React from "react";
import MaquinaCard from "../../components/Maquinas/MaquinaCard";

function Machine() {
  const userData = {
    maquina: " Destornillador torx",
    inventario: "disponible",
    precio: "3500",
  };
  return (
    <div>
      <h1>Maquinas de SoftMachine</h1>
      <MaquinaCard userData={userData}> </MaquinaCard>
    </div>
  );
}

export default Machine;
