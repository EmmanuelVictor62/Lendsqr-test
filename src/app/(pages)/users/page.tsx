import React from "react";

import UserOverviewCard, {
  UserOverviewCardProps,
} from "@/components/UserOverviewCard";
import Icon from "@/components/Icon";

import styles from "./users.module.scss";
import UsersTableCard from "./UsersTableCard";

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
        <div className={styles["users__table-header"]}>
          <button className={styles["users__table-header-button"]}>
            Organization <Icon name="filter" />
          </button>
          <button className={styles["users__table-header-button"]}>
            Username <Icon name="filter" />
          </button>
          <button className={styles["users__table-header-button"]}>
            Email <Icon name="filter" />
          </button>
          <button className={styles["users__table-header-button"]}>
            Phone number <Icon name="filter" />
          </button>
          <button className={styles["users__table-header-button"]}>
            Date Joined <Icon name="filter" />
          </button>
          <button className={styles["users__table-header-button"]}>
            Status <Icon name="filter" />
          </button>
        </div>
        <div className={styles["users__table-card-wrapper"]}>
          <UsersTableCard />
        </div>
      </div>
    </div>
  );
};

export default Users;
