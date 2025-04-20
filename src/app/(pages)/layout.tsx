import React from "react";
import styles from "./layout.module.scss";
import Header from "@/components/Header";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles["layout"]}>
      <Header />
      {children}
    </div>
  );
}
