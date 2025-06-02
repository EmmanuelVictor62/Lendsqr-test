"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Icon from "../Icon";
import { routes } from "constants/routes";
import { Url } from "next/dist/shared/lib/router/router";

import styles from "./sidebar.module.scss";

const Sidebar: React.FC = () => {
  const currentPath = usePathname();

  return (
    <aside role="navigation" className={styles["sidebar"]}>
      <button className={styles["sidebar__organization-btn"]}>
        <Icon name="briefcase" />
        <span>Switch Organization</span>
        <Icon name="arrowDown" />
      </button>

      {routes?.map((route, index) => {
        if (!route?.children) {
          return (
            <Link
              key={index}
              href={route.path as Url}
              className={styles["sidebar__link"]}
              data-active={currentPath === route?.path}
            >
              {route.icon && <Icon name={route.icon} />}
              <span>{route.label}</span>
            </Link>
          );
        }

        return (
          <div key={index} className={styles["sidebar__link-wrapper"]}>
            <p className={styles["sidebar__link-heading"]}>{route.label}</p>
            {route.children.map((child, index) => (
              <Link
                key={index}
                href={child.path as Url}
                className={styles["sidebar__link"]}
                data-active={currentPath === child?.path}
              >
                {child.icon && <Icon name={child.icon} />}
                <span>{child.label}</span>
              </Link>
            ))}
          </div>
        );
      })}
    </aside>
  );
};

export default Sidebar;
