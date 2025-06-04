import React from "react";
import Link from "next/link";
import Image from "next/image";

import Icon from "../Icon";

import styles from "./header.module.scss";

interface HeaderProps {
  handleToggleSidebar: () => void;
}
const Header: React.FC<HeaderProps> = ({ handleToggleSidebar }) => {
  return (
    <header className={styles["header"]}>
      <Icon name="logoSmall" className={styles["header__logo"]} />
      <button
        className={styles["header__menu-icon"]}
        onClick={handleToggleSidebar}
      >
        <Icon name="harmburger" />
      </button>

      <div className={styles["header__input-container"]}>
        <input
          type="text"
          placeholder="Search for anything"
          className={styles["header__input"]}
        />
        <button type="button" className={styles["header__input-button"]}>
          <Icon name="search" />
        </button>
      </div>
      <div className={styles["header__avatar-wrapper"]}>
        <Link href={""} className={styles["header__avatar-doc-link"]}>
          Docs
        </Link>
        <Icon name="bell" className={styles["header__avatar-bell-icon"]} />
        <Image
          alt="avatar"
          src={"/images/avatar.png"}
          height={60}
          width={48}
          className={styles["header__avatar"]}
        />
        <button type="button" className={styles["header__avatar-name"]}>
          Adedeji <Icon name="caretDown" />
        </button>
      </div>
    </header>
  );
};

export default Header;
