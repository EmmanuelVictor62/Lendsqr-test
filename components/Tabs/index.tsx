import React from "react";

import styles from "./tabs.module.scss";

interface TabsProps {
  tabList: Record<string, React.ReactNode>;
  activeTab: string;
  handleTabClick: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabList, activeTab, handleTabClick }) => {
  const tabHeaders = Object.keys(tabList);

  return (
    <div className={styles["tab"]}>
      {tabHeaders?.map((tab, index) => {
        return (
          <button
            key={index + 1}
            data-active={tab === activeTab}
            onClick={() => handleTabClick(tab)}
            className={styles["tab__button"]}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
