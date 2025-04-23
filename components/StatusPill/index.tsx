import React from "react";

import styles from "./status-pill.module.scss";

export type StatusType = "Active" | "Inactive" | "Pending" | "Blacklisted";

interface StatusPillProps {
  status: StatusType;
}

const StatusPill: React.FC<StatusPillProps> = ({ status }) => {
  return (
    <button
      data-status={status?.toLowerCase()}
      className={styles["status-pill"]}
    >
      {status}
    </button>
  );
};

export default StatusPill;
