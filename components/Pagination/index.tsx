import React from "react";
import ReactPaginate from "react-paginate";

import Icon from "../Icon";

import styles from "./pagination.module.scss";

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (selectedItem: { selected: number }) => void;
  itemsPerPage: number;
  totalItems: number;
}

const Pagination: React.FC<PaginationProps> = ({
  pageCount,
  currentPage,
  onPageChange,
  itemsPerPage,
  totalItems,
}) => {
  const offset = currentPage * itemsPerPage;
  const showingTo = Math.min(offset + itemsPerPage, totalItems);

  return (
    <div className={styles["pagination__container"]}>
      <p className={styles["pagination__info"]}>
        Showing
        <button className={styles["pagination__info-btn"]}>{showingTo}</button>
        out of {totalItems}
      </p>

      <ReactPaginate
        previousLabel={<Icon name="arrowLeft" />}
        nextLabel={<Icon name="arrowRight" />}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={onPageChange}
        forcePage={currentPage}
        containerClassName={styles["pagination"]}
        activeClassName={styles["pagination__active-page"]}
      />
    </div>
  );
};

export default Pagination;
