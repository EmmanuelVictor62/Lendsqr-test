import React from "react";
import styles from "./button.module.scss";

interface ButtonProps {
  label: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
  style?: React.CSSProperties;
  handleClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  type,
  variant,
  style,
  handleClick,
}) => {
  return (
    <button
      role="button"
      type={type}
      data-variant={variant}
      className={styles["button"]}
      style={style}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
