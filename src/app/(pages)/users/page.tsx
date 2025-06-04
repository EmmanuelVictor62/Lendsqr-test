"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Icon from "@/components/Icon";
import UsersTableCard from "./UsersTableCard";
import Pagination from "@/components/Pagination";
import { LoadingCards } from "@/components/LoadingCard";
import UserOverviewCard, {
  UserOverviewCardProps,
} from "@/components/UserOverviewCard";
import FilterDropdown, { FilterFieldProps } from "@/components/Filter";

import { getUsers } from "services/user";
import { generateReadableSlug } from "@/utils/helper";
import { UserStatusType } from "types/user";

import styles from "./users.module.scss";

type UserType = {
  username: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: UserStatusType;
  organization: string;
};

const Users: React.FC = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [allUsers, setAllUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [toggleFilterDropdown, setToggleFilterDropdown] =
    useState<boolean>(false);

  const router = useRouter();

  const usersPerPage = 10;
  const offset = currentPage * usersPerPage;
  const currentUsers = users.slice(offset, offset + usersPerPage);
  const activeUsers = users?.filter((user) => user?.status === "Active");
  const pageCount = Math.ceil(users.length / usersPerPage);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const handleUpdateUserStatus = (email: string, newStatus: UserStatusType) => {
    const updatedUsers = users.map((user) =>
      user.email === email ? { ...user, status: newStatus } : user
    );
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const handleGoToUser = (username: string, email: string) => {
    const selectedUser = users?.find((user) => user?.email === email);
    localStorage.setItem("selectedUser", JSON.stringify(selectedUser));

    router.push(`/users/${generateReadableSlug(username)}`);
  };

  const handleFilter = (filters: Record<string, string>) => {
    const filteredUsers = allUsers.filter((user) => {
      return Object.entries(filters).every(([key, value]) => {
        if (!value) return true;

        const userValue =
          key === "Date Joined"
            ? user.dateJoined?.split("T")[0]
            : user[key.toLowerCase().replace(" ", "") as keyof UserType];

        return String(userValue).toLowerCase().includes(value.toLowerCase());
      });
    });

    setUsers(filteredUsers);
  };

  const handleReset = () => {
    setUsers(allUsers);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const { data } = await getUsers();

        setUsers(data);
        setAllUsers(data);
        setLoading(false);
      } catch {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const usersData: UserOverviewCardProps[] = [
    {
      icon: "userRounded",
      text: "Users",
      number: users?.length,
    },
    {
      icon: "peopleRounded",
      text: "Active Users",
      number: activeUsers?.length,
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

  const filterFields: FilterFieldProps[] = [
    {
      name: "organization",
      label: "Organization",
      type: "select",
      placeholder: "Organization",
      options: Array.from(new Set(users?.map((user) => user?.organization))),
    },
    { name: "username", label: "Username", type: "text", placeholder: "User" },
    { name: "email", label: "Email", type: "text", placeholder: "Email" },
    { name: "date", label: "Date", type: "date", placeholder: "Date" },
    {
      name: "phoneNumber",
      label: "Phone Number",
      type: "text",
      placeholder: "Phone Number",
    },
    {
      name: "status",
      label: "Status",
      type: "select",
      placeholder: "Status",
      options: ["Active", "Inactive", "Pending", "Blacklisted"],
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
      <div className={styles["users__table-wrapper"]}>
        <div className={styles["users__table"]}>
          <div className={styles["users__table-header"]}>
            <button
              className={styles["users__table-header-button"]}
              onClick={() => setToggleFilterDropdown(!toggleFilterDropdown)}
            >
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
            {loading ? (
              <LoadingCards length={5} />
            ) : currentUsers?.length < 1 ? (
              <div className={styles["users__empty-card"]}>
                <Icon name="notFound" />
                <div className={styles["users__empty-card-text-container"]}>
                  <p className={styles["users__empty-card-text"]}>No Result</p>
                  <p className={styles["users__empty-card-text-description"]}>
                    Oops, no results found
                  </p>
                </div>
              </div>
            ) : (
              currentUsers?.map((user) => (
                <UsersTableCard
                  key={user?.email}
                  email={user?.email}
                  organization={user?.organization}
                  phoneNumber={user?.phoneNumber}
                  dateJoined={user?.dateJoined}
                  username={user?.username}
                  status={user?.status}
                  handleViewDetails={() =>
                    handleGoToUser(user?.username, user?.email)
                  }
                  handleBlacklistUser={() =>
                    handleUpdateUserStatus(user.email!, "Blacklisted")
                  }
                  handleActivateUser={() =>
                    handleUpdateUserStatus(user?.email, "Active")
                  }
                />
              ))
            )}
          </div>
        </div>
        <Pagination
          pageCount={pageCount}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          itemsPerPage={usersPerPage}
          totalItems={users.length}
        />
        {toggleFilterDropdown && (
          <FilterDropdown
            handleFilter={handleFilter}
            handleReset={handleReset}
            fields={filterFields}
          />
        )}
      </div>
    </div>
  );
};

export default Users;
