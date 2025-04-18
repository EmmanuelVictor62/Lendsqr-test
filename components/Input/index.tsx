import React, { useState } from "react";
import styles from "./input.module.scss";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label?: string;
  placeholder?: string;
  type?: "text" | "password" | "email";
  error?: string;
  register: UseFormRegisterReturn;
  style?: React.CSSProperties;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type = "text",
  register,
  error,
  style,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className={styles["input__wrapper"]}>
      {label && <label className={styles["input__label"]}>{label}</label>}
      <div className={styles["input__container"]} style={style}>
        <input
          type={showPassword ? "text" : type}
          className={styles["input"]}
          placeholder={placeholder}
          data-error={error}
          {...register}
        />
        {type === "password" ? (
          <button
            type="button"
            className={styles["input__password-button"]}
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? "HIDE" : "SHOW"}
          </button>
        ) : null}
      </div>
      {error && <p className={styles["input__error"]}>{error}</p>}
    </div>
  );
};

export default Input;
