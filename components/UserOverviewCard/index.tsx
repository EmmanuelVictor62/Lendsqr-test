import React from "react";

import Icon from "../Icon";
import { IconTypes } from "@/public/icons/icon";

import styles from "./user-card.module.scss";
import { formattedNumber } from "@/utils/helper";

export interface UserOverviewCardProps {
  icon: IconTypes;
  text: string;
  number: number;
}

const UserOverviewCard: React.FC<UserOverviewCardProps> = ({
  icon,
  text,
  number,
}) => {
  return (
    <div className={styles["card"]}>
      <Icon name={icon} />
      <p className={styles["card__text"]}>{text} </p>
      <p className={styles["card__number"]}>{formattedNumber(number)}</p>
    </div>
  );
};

export default UserOverviewCard;
