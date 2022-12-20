import React from "react";

import "./global.css";
import logo from "./logo.png";

function Logo(props) {
  const { size, renderText } = props;

  const logoStyle = {
    display: "flex",
  };
  return (
    <div className="logo" style={logoStyle}>
      <img src={logo} style={{ width: "51px", height: "51px" }}></img>
      <h1 className="logo-title">SOFTMACHINE</h1>
    </div>
  );
}

export default Logo;
