import React from "react";
import "./Input.css";

const Input = ({ placeholder = "", onChange = () => {}, value = "" }) => {
  return (
    <div className="InputWrapper">
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;
