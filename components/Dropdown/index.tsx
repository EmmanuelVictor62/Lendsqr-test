import React from "react";

import Icon from "../Icon";
import { IconTypes } from "@/public/icons/icon";

import styles from "./dropdown.module.scss";

export interface DropdownListProps {
  label: string;
  icon: IconTypes;
  handleClick: () => void;
}

interface DropdownProps {
  dropdownList: DropdownListProps[];
}

const Dropdown: React.FC<DropdownProps> = ({ dropdownList }) => {
  return (
    <div className={styles["dropdown"]}>
      {dropdownList?.map((btn, index) => (
        <button
          key={index + 1}
          className={styles["dropdown__button"]}
          onClick={btn?.handleClick}
        >
          <Icon name={btn?.icon} />
          {btn?.label}
        </button>
      ))}
    </div>
  );
};

export default Dropdown;
