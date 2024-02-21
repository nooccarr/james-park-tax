import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import SearchParams from './SearchParams';
// import div from "react-bootstrap/div";
// import div from "react-bootstrap/div";
// import div from "react-bootstrap/div";
// import div from "react-bootstrap/div";
import PageHeader from './PageHeader';
import InfoFooterImg from '../images/info-footer.png';
import '../styles/results.css';

const Results = ({
  searchQuery,
  handleSearchQueryChange,
  handleSearchSubmit,
  searchLength,
}) => {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   window.innerWidth <= 767 ? setIsMobile(true) : setIsMobile(false);
  //   const onWindowResize = () => {
  //     window.innerWidth <= 767 ? setIsMobile(true) : setIsMobile(false);
  //   };
  //   window.addEventListener('resize', onWindowResize);
  //   return () => window.removeEventListener('resize', onWindowResize);
  // }, []);

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  // const searchBottom = searchLength > 0 ? '0px' : '15vh';
  // console.log(searchLength);
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
        <div>
          <div className="text-center"></div>
        </div>
      </div>
    </>
  );
};

export default Results;
