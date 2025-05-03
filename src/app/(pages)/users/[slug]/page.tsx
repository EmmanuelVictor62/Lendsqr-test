"use client";
import React, { useEffect, useState } from "react";

import Icon from "@/components/Icon";
import Button from "@/components/Button";

import { User, UserDetailsTabType } from "types/user";

import styles from "./slug.module.scss";
import Tabs from "@/components/Tabs";

const UserDetails: React.FC = () => {
  const [user, setUser] = useState<User>(null!);
  const [activeTab, setActiveTab] =
    useState<UserDetailsTabType>("General Details");

  const handleActiveTab = (tab: string) => {
    setActiveTab(tab as UserDetailsTabType);
  };

  const tabList: Record<UserDetailsTabType, React.ReactNode> = {
    "General Details": <h1>General Details</h1>,
    Documents: <h1>Documents</h1>,
    "Bank Details": <h1>Bank Details</h1>,
    Loans: <h1>Loans</h1>,
    Savings: <h1>Savings</h1>,
    "App and System": <h1>App and System</h1>,
  };

  useEffect(() => {
    const user = localStorage.getItem("selectedUser");

    if (user) setUser(JSON.parse(user));
  }, []);

  return (
    <div className={styles["user-details"]}>
      <button className={styles["user-details__back-btn"]}>
        <Icon name="backArrow" />
        Back to Users
      </button>
      <div className={styles["user-details__heading-container"]}>
        <h1 className={styles["user-details__heading"]}>User Details</h1>
        <div className={styles["user-details__heading-button"]}>
          <Button
            label="BLACKLIST USER"
            variant="secondary"
            style={{ border: "1px solid #E4033B", color: "#E4033B" }}
          />
          <Button
            label="ACTIVATE USER"
            variant="secondary"
            style={{ border: "1px solid #39CDCC", color: "#39CDCC" }}
          />
        </div>
      </div>
      <div className={styles["user-details__info-wrapper"]}>
        <div className={styles["user-details__info-container"]}>
          <div className={styles["user-details__info"]}>
            <div className={styles["user-details__info-avatar-container"]}>
              <div className={styles["user-details__info-avatar"]}>
                <Icon name="avatar" />
              </div>
              <div className={styles["user-details__info-name-container"]}>
                <p className={styles["user-details__info-name"]}>
                  {user?.username}
                </p>
                <p className={styles["user-details__info-name-id"]}>
                  LSQFf587g90
                </p>
              </div>
            </div>
            <div className={styles["user-details__info-rating-container"]}>
              <p className={styles["user-details__info-rating-heading"]}>
                User&apos;s Tier
              </p>
              <div className={styles["user-details__info-rating"]}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i + 1} name={i < 2 ? "starFilled" : "star"} />
                ))}
              </div>
            </div>
            <div className={styles["user-details__info-income-container"]}>
              <p className={styles["user-details__info-income"]}>
                {user?.educationAndEmployment?.monthlyIncome[0]}
              </p>
              <p className={styles["user-details__info-income-bvn"]}>
                {user?.personalInfo?.bvn}
              </p>
            </div>
          </div>

          <Tabs
            tabList={tabList}
            activeTab={activeTab}
            handleTabClick={handleActiveTab}
          />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
