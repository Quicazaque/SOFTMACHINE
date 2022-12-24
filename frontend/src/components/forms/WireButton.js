import React from "react";
import "./forms.css";

export default function Wirebutton(props) {
  const { children, onClick, type } = props;
  return (
    <button className="Wirebutton" type={type} onClick={onClick}>
      {children}
    </button>
  );
}
