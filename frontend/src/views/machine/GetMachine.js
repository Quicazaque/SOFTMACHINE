import React from "react";
import "./Machines.css";

function GetMachine(props) {
  const { data } = props;

  const { maquina, inventario, precio } = data;

  let inventarioName = "";

  if (inventario === "Si") {
    inventarioName = "positive-inventario";
  } else {
    inventarioName = "negative-inventario";
  }

  return (
    <div className="GetMaquina grid card">
      <p className="maquina">Maquina: {maquina} </p>
      <p className={inventarioName}>Disponibilidad: {inventario} </p>
      <p className="precio"> Precio: $ {precio} </p>
    </div>
  );
}
export default GetMachine;
