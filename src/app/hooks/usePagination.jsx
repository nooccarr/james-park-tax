import React from 'react';
import { useMemo } from 'react';

const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}) => {
  const paginationRange = useMemo(() => {
    const siblingCount = 2;
    const totalPageCount = Math.ceil(totalCount / pageSize);

    const totalPageNumbers = siblingCount + 3;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    const spaceLeft = leftSiblingIndex > 2;
    const spaceRight = rightSiblingIndex < totalPageCount - 1;

    if (!spaceLeft && spaceRight) {
      const itemCount = 3 + siblingCount;
      const pages = range(1, itemCount);
      return [...pages];
    }

    if (spaceLeft && !spaceRight) {
      const itemCount = 3 + siblingCount;
      const pages = range(totalPageCount - itemCount + 1, totalPageCount);
      return [...pages];
    }

    if (spaceLeft && spaceRight) {
      const pages = range(leftSiblingIndex, rightSiblingIndex);
      return [...pages];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);
  return paginationRange;
};
