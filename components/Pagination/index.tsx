import React from "react";
import ReactPaginate from "react-paginate";

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
    <div className={styles["pagination"]}>
      <p className={styles["pagination__info"]}>
        Showing
        <button className={styles["pagination__info-btn"]}>
          {offset + 1}-{showingTo}
        </button>
        out of {totalItems}
      </p>

      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={onPageChange}
        forcePage={currentPage}
        containerClassName={styles.pagination}
        activeClassName={styles.activePage}
      />
    </div>
  );
};

export default Pagination;
