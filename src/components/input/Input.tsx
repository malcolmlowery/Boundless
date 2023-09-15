import React from "react";
import "./input.css";

interface InputI {
  placeholder: string;
  style: React.CSSProperties;
}

const Input: React.FC<InputI> = ({ placeholder, style }) => {
  return (
    <div className="input-container" style={style}>
      <input placeholder={placeholder} />
    </div>
  );
};

export default Input;
