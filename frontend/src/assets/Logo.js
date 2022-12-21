import React from "react";
import "./Logo.css";
import logo from "./logo.png";

function Logo(props) {
  const { size = "70px" ,renderText= true } = props;

  const style = {
    width: size,
    height: size,
  };

  return (
    <div className="logo inline-flex ">
      <img src={logo} style={style}></img>
      {renderText ? <h1 className="title">SOFTMACHINE</h1>: null}
      
    </div>
  );
}

export default Logo;
