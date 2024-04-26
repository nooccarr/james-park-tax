import useScrollToTop from '../hooks/useScrollToTop';
import { Outlet } from 'react-router-dom';
import SearchParams from './SearchParams';
import PageHeader from './PageHeader';
import '../styles/results.css';

const Results = ({
  searchQuery,
  handleSearchQueryChange,
  handleSearchSubmit,
}) => {
  useScrollToTop();

  return (
    <>
      <div className="results-header-image">
        <PageHeader title="Search Articles" />
      </div>

      <div className="max-w-[2240px] mx-auto">
        <div className="pt-20 pb-20 md:pb-40 mx-5 md:mx-10">
          <SearchParams
            searchQuery={searchQuery}
            handleSearchQueryChange={handleSearchQueryChange}
            handleSearchSubmit={handleSearchSubmit}
          />

          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Results;
