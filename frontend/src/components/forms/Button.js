import React from "react";
import "./forms.css";

function alerta(mensaje) {
  alerta(mensaje);
}

export default function Button(props) {
  const { children, onClick, type } = props;
  return (
    <button className="button" type={type} onClick={onClick}>
      <b>{children}</b>
    </button>
  );
}
