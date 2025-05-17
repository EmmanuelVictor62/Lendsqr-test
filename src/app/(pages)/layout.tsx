import React from "react";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

import styles from "./layout.module.scss";

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
        <div className={styles["pages-layout__children-container"]}>
          {children}
        </div>
      </div>
    </div>
  );
}
