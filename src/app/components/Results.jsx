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
    <div className="animate-fadeIn">
      <PageHeader title="Search Articles" image="results" />

      <main className="max-w-[1280px] mx-auto">
        <div className="pt-20 pb-20 md:pb-40 mx-5 md:mx-10">
          <SearchParams
            searchQuery={searchQuery}
            handleSearchQueryChange={handleSearchQueryChange}
            handleSearchSubmit={handleSearchSubmit}
          />

          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Results;
