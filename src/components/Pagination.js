import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { usePagination, DOTS } from "../hooks/usePagination";

const PaginationList = styled.ul`
  display: flex;
  list-style-type: none;
`;

const PaginationListItem = styled.li`
  width: 32px;
  height: 32px;
  margin: 0 8px;
  border-radius: 6px;
  border: ${(props) => (props.dots ? "none" : "solid 1px #d9d9d9")};
  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 400;
`;

function Pagination({
  onPageChange,
  totalCount,
  siblingCount,
  currentPage,
  pageSize,
}) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (paginationRange.length < 2) {
    return null;
  }

  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };

  const handlePreviousPage = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <PaginationList>
      <PaginationListItem onClick={handlePreviousPage}>
        <div>{"<"}</div>
      </PaginationListItem>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <PaginationListItem dots key={index}>
              &#8230;
            </PaginationListItem>
          );
        }
        return (
          <PaginationListItem
            key={index}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </PaginationListItem>
        );
      })}
      <PaginationListItem onClick={handleNextPage}>
        <div>{">"}</div>
      </PaginationListItem>
    </PaginationList>
  );
}

export default Pagination;
