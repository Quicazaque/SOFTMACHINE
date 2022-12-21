import React from "react";
import "./Logo.css";
import logo from "./logo.png";

function Logo(props) {
  
  const { size = "70px" /**renderText*/ } = props;

  const style = {
    width: size,
    height: size,
  };

  return (
    <div className="logo flex ">
      <img src={logo} style={style}></img>
      <h1 className="title">SOFTMACHINE</h1>
    </div>
  );
}

export default Logo;
