//This provider is added to avoid turning my root layout to a client component
"use client";

import { useState } from "react";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

import styles from "../layout.module.scss";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);

  return (
    <div className={styles["pages-layout"]}>
      <div className={styles["pages-layout__header"]}>
        <Header handleToggleSidebar={() => setToggleSidebar(true)} />
      </div>
      <div className={styles["pages-layout__children-wrapper"]}>
        <div
          className={styles["pages-layout__sidebar-wrapper"]}
          data-toggle={toggleSidebar}
        >
          <Sidebar handleToggleSidebar={() => setToggleSidebar(false)} />
        </div>
        <div className={styles["pages-layout__children-container"]}>
          {children}
        </div>
      </div>
    </div>
  );
}
