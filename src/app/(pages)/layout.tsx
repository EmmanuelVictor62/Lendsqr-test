import React from "react";
import styles from "./layout.module.scss";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles["pages-layout"]}>
      <div className={styles["pages-layout__header"]}>
        <Header />
      </div>
      <div className={styles["pages-layout__children-wrapper"]}>
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
