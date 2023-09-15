import React from "react";
import "./button.css";

interface ButtonI {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "alert" | "danger";
  style?: React.CSSProperties;
  type?: "fill" | "outline" | "text";
}

const Button: React.FC<ButtonI> = ({
  children,
  color = "primary",
  style,
  type = "text",
}) => (
  <button style={style} className={`button-type-${type} button-color-${color}`}>
    {children}
  </button>
);

export default Button;
