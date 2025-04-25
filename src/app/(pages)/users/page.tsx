import React from "react";

import styles from "./users.module.scss";
import UserOverviewCard, {
  UserOverviewCardProps,
} from "@/components/UserOverviewCard";
import Icon from "@/components/Icon";

const Users: React.FC = () => {
  const usersData: UserOverviewCardProps[] = [
    {
      icon: "userRounded",
      text: "Users",
      number: 2500,
    },
    {
      icon: "peopleRounded",
      text: "Active Users",
      number: 2500,
    },
    {
      icon: "loanRounded",
      text: "Users With Loan",
      number: 2500,
    },
    {
      icon: "savingsRounded",
      text: "Users With Savings",
      number: 2500,
    },
  ];
  return (
    <div className={styles["users"]}>
      <h1 className={styles["users__heading"]}>Users</h1>
      <div className={styles["users__card-wrapper"]}>
        {usersData?.map((data, index) => (
          <UserOverviewCard
            key={index}
            icon={data?.icon}
            text={data?.text}
            number={data?.number}
          />
        ))}
      </div>
      <div className={styles["users__table"]}>
        <button className={styles["users__table-button"]}>
          Organization <Icon name="filter" />
        </button>
        <button className={styles["users__table-button"]}>
          Username <Icon name="filter" />
        </button>
        <button className={styles["users__table-button"]}>
          Email <Icon name="filter" />
        </button>
        <button className={styles["users__table-button"]}>
          Phone number <Icon name="filter" />
        </button>
        <button className={styles["users__table-button"]}>
          Date Joined <Icon name="filter" />
        </button>
        <button className={styles["users__table-button"]}>
          Status <Icon name="filter" />
        </button>
      </div>
    </div>
  );
};

export default Users;
