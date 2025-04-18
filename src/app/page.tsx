"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";

import Icon from "@/components/Icon";
import Button from "@/components/Button";
import Input from "@/components/Input";

import styles from "./page.module.scss";

type Inputs = {
  email: string;
  password: string;
};

export default function Home() {
  const {
    register,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    <div className={styles["home"]}>
      <div className={styles["home__image-wrapper"]}>
        <Icon name="logo" className={styles["home__logo"]} />
        <Image
          alt="Sign in image"
          src={"/images/pablo-sign-in.svg"}
          layout="responsive"
          height={330}
          width={600}
          className={styles["home__image"]}
        />
      </div>
      <div className={styles["home__form-wrapper"]}>
        <form className={styles["home__form"]}>
          <div className={styles["home__form-heading-container"]}>
            <h1 className={styles["home__form-heading"]}>Welcome!</h1>
            <p className={styles["home__form-heading-text"]}>
              Enter details to login.
            </p>
          </div>
          <div className={styles["home__form-input-wrapper"]}>
            <Input
              type="email"
              placeholder="Email"
              style={{ border: "2px solid rgba(84, 95, 125, 0.15)" }}
              register={register("email", {
                required: "Email is required",
              })}
              error={errors.email?.message}
            />
            <Input
              type="password"
              placeholder="Password"
              style={{ border: "2px solid rgba(84, 95, 125, 0.15)" }}
              register={register("password", {
                required: "Password is required",
              })}
              error={errors?.password?.message}
            />
            <button className={styles["home__form-forgot-password-btn"]}>
              Forgot Password?
            </button>
          </div>
          <Button label="LOG IN" type="submit" />
        </form>
      </div>
    </div>
  );
}
