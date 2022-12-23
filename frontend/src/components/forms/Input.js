import React from "react";
import "./forms.css";

function Input(props) {
  const { children, type, onChange,placeholder } = props;
  return (
    <label className="input">
      <b>{children}</b>
      <input
      type={type}
      onChange={onChange}
      placeholder={placeholder}
    ></input>
    </label>
  );
}

export default Input;