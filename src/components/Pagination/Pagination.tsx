import React from "react";
import styles from "./Pagination.module.css";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const MAX_VISIBLE = 5;

  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= MAX_VISIBLE) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pages;
  };

  const handlePageClick = (page: number | string) => {
    if (typeof page === "number") {
      onPageChange(page);
    }
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.navBtn}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        ◀
      </button>

      {getPageNumbers().map((page, idx) => (
        <button
          key={idx}
          onClick={() => handlePageClick(page)}
          className={
            page === currentPage
              ? styles.active
              : typeof page === "string"
              ? styles.ellipsis
              : ""
          }
          disabled={typeof page === "string"}
        >
          {page}
        </button>
      ))}

      <button
        className={styles.navBtn}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        ▶
      </button>
    </div>
  );
};

export default Pagination;
