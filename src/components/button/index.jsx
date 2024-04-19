import React from "react";
import "./styles.css";

export const Button = ({ onClick, label, variant }) => {
  return (
    <button
      className={`button--${
        variant === "secondary"
          ? "secondary"
          : variant === "terciary"
          ? "terciary"
          : "primary"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
