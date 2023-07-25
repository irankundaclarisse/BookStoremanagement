import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div>
      <p>Page {currentPage} of {totalPages}</p>
      <ul>
        {pageNumbers.map((page) => (
          <li key={page}>
            <button onClick={() => onPageChange(page)}>{page}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
