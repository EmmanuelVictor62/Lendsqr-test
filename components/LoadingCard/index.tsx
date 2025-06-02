import React from "react";
import styles from "./loading-card.module.scss";

interface LoadingCardsProps {
  length: number;
}

export const LoadingCard = () => {
  return (
    <div className={styles["loadingCard"]}>
      <div className={styles["loadingCard__row"]}>
        <div className={styles["loadingCard__col"]}>
          <span></span>
        </div>
        <div className={styles["loadingCard__col"]}>
          <span></span>
          <span className={styles["sub-temp"]}></span>
          <span className={styles["sub-temp sub-temp-three"]}></span>
        </div>
        <div className={styles["loadingCard__col"]}>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export const LoadingCards: React.FC<LoadingCardsProps> = ({ length }) => {
  return (
    <>
      {Array.from({ length: length })
        .map((_, i) => i + 1)
        .map((_, index) => {
          return <LoadingCard key={index + 1} />;
        })}
    </>
  );
};
