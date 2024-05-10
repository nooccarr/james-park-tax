import { usePagination, DOTS } from '../hooks/usePagination';

const Pagination = ({
  totalCount,
  currentPage,
  pageSize,
  onPageChange,
  siblingCount = 1,
}) => {
  const paginationRange = usePagination({
    totalCount,
    pageSize,
    siblingCount,
    currentPage,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const scrollToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  };

  const onNext = () => {
    onPageChange(currentPage + 1);
    scrollToTop();
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
    scrollToTop();
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  const handlePageChange = (page) => {
    onPageChange(page);
    scrollToTop();
  };

  return (
    <div className="flex items-center justify-between border border-gray-200 shadow-sm bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between md:hidden">
        <button
          className="article-button m-0 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-white"
          onClick={onPrevious}
          disabled={currentPage === 1 ? true : false}
        >
          Previous
        </button>
        <button
          className="article-button m-0 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-white"
          onClick={onNext}
          disabled={currentPage === lastPage}
        >
          Next
        </button>
      </div>
      <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
        <div className="flex gap-1 items-baseline">
          <p className="text-sm text-gray-700">Showing</p>
          <span className="font-medium">
            {(currentPage - 1) * pageSize + 1}
          </span>
          <p className="text-sm text-gray-700">to</p>
          <span className="font-medium">
            {Math.min((currentPage - 1) * pageSize + pageSize, totalCount)}
          </span>
          <p className="text-sm text-gray-700">of</p>
          <span className="font-medium">{totalCount}</span>
          <p className="text-sm text-gray-700">results</p>
        </div>
        <div className="">
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0  disabled:cursor-not-allowed disabled:bg-gray-300"
              onClick={onPrevious}
              disabled={currentPage === 1 ? true : false}
            >
              <span className="sr-only">Previous</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {paginationRange.map((pageNumber) => {
              if (pageNumber === DOTS) {
                return (
                  <button className="relative items-center px-3 pb-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 inline-flex">
                    &#8230;
                  </button>
                );
              }
              return (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`${
                    pageNumber === currentPage
                      ? 'relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold bg-[#9e9a79] text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                      : 'relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex'
                  }`}
                  disabled={pageNumber === currentPage ? true : false}
                >
                  {pageNumber}
                </button>
              );
            })}
            <button
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0  disabled:cursor-not-allowed disabled:bg-gray-300"
              onClick={onNext}
              disabled={currentPage === lastPage}
            >
              <span className="sr-only">Next</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
