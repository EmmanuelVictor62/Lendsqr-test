import React from "react";

import Icon from "@/components/Icon";
import StatusPill from "@/components/StatusPill";

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
      <p className={styles["table-card__organization"]}>Lendsqr</p>
      <p className={styles["table-card__username"]}>Adedeji</p>
      <p className={styles["table-card__email"]}>adedeji@gmail.com</p>
      <p className={styles["table-card__phoneNumber"]}>7049011040</p>
      <p className={styles["table-card__date"]}>May 15, 2020 10:00AM</p>
      <StatusPill status="Active" />
      <button className={styles["table-card__ellipse-icon"]}>
        <Icon name="ellipse" />
      </button>
    </div>
  );
};

export default UsersTableCard;
