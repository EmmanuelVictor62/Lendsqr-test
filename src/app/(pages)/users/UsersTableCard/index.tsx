import React, { useState } from "react";

import Icon from "@/components/Icon";
import StatusPill, { StatusType } from "@/components/StatusPill";
import Dropdown, { DropdownListProps } from "@/components/Dropdown";

import styles from "./table-card.module.scss";

interface UsersTableCardProps {
  organization?: string;
  username?: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: string;
}

const UsersTableCard: React.FC<UsersTableCardProps> = ({
  organization,
  username,
  email,
  phoneNumber,
  dateJoined,
  status,
}) => {
  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);

  const handleToggleDropdown = () => {
    setToggleDropdown(!toggleDropdown);
  };

  const dropdownList: DropdownListProps[] = [
    {
      icon: "eye",
      label: "View Details",
      handleClick: () => {
        handleToggleDropdown();
      },
    },
    {
      icon: "userCancel",
      label: "Blacklist User",
      handleClick: () => {
        handleToggleDropdown();
      },
    },
    {
      icon: "userMark",
      label: "Activate User",
      handleClick: () => {
        handleToggleDropdown();
      },
    },
  ];

  return (
    <div className={styles["table-card"]}>
      <p className={styles["table-card__organization"]}>{organization} </p>
      <p className={styles["table-card__username"]}>{username} </p>
      <p className={styles["table-card__email"]}>{email} </p>
      <p className={styles["table-card__phoneNumber"]}>{phoneNumber} </p>
      <p className={styles["table-card__date"]}>{dateJoined} </p>
      <StatusPill status={status as StatusType} />
      <div className={styles["table-card__menu-button"]}>
        <button
          className={styles["table-card__menu-icon"]}
          onClick={handleToggleDropdown}
        >
          <Icon name="ellipse" />
        </button>
        {toggleDropdown ? <Dropdown dropdownList={dropdownList} /> : null}
      </div>
    </div>
  );
};

export default UsersTableCard;
