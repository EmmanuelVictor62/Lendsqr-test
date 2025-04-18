import React from "react";
import styles from "./button.module.scss";

interface ButtonProps {
  label: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ label, type, variant, style }) => {
  return (
    <button
      type={type}
      data-variant={variant}
      className={styles["button"]}
      style={style}
    >
      {label}
    </button>
  );
};

export default Button;
