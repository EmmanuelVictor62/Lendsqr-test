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
  handleItemsPerPage: (number: number) => void;
  itemsToShow?: number[];
  toggleDropdown?: boolean;
  handleToggleDropdown: () => void;
}

const Pagination: React.FC<PaginationProps> = ({
  pageCount,
  currentPage,
  onPageChange,
  itemsPerPage,
  totalItems,
  handleItemsPerPage,
  itemsToShow,
  toggleDropdown,
  handleToggleDropdown,
}) => {
  const offset = currentPage * itemsPerPage;
  const showingTo = Math.min(offset + itemsPerPage, totalItems);

  return (
    <div className={styles["pagination__container"]}>
      <div className={styles["pagination__info"]}>
        Showing
        <button
          className={styles["pagination__info-btn"]}
          data-testid="pagination-info-btn"
          onClick={handleToggleDropdown}
        >
          {showingTo} <Icon name="arrowDown" />
        </button>
        out of {totalItems}
        {toggleDropdown && (
          <ul className={styles["pagination__info-dropdown"]}>
            {itemsToShow?.map((item, index) => (
              <li
                className={styles["pagination__info-dropdown-item"]}
                key={index + 1}
                onClick={() => handleItemsPerPage(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

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
