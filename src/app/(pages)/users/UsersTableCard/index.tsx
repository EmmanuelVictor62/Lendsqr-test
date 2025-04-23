import React from "react";

import Icon from "@/components/Icon";
import StatusPill, { StatusType } from "@/components/StatusPill";

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
  return (
    <div className={styles["table-card"]}>
      <p className={styles["table-card__organization"]}>{organization} </p>
      <p className={styles["table-card__username"]}>{username} </p>
      <p className={styles["table-card__email"]}>{email} </p>
      <p className={styles["table-card__phoneNumber"]}>{phoneNumber} </p>
      <p className={styles["table-card__date"]}>{dateJoined} </p>
      <StatusPill status={status as StatusType} />
      <button className={styles["table-card__ellipse-icon"]}>
        <Icon name="ellipse" />
      </button>
    </div>
  );
};

export default UsersTableCard;
