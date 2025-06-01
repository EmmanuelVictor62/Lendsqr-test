import React from "react";
import styles from "./button.module.scss";
import Icon from "../Icon";

interface ButtonProps {
  label: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
  style?: React.CSSProperties;
  loading?: boolean;
  handleClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  type,
  variant,
  style,
  loading,
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
      data-loading={loading}
    >
      {label}
      {loading && <Icon name="loading" data-testid={"loading-icon"} />}
    </button>
  );
};

export default Button;
