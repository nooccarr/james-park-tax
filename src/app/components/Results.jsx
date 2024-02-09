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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.innerWidth <= 767 ? setIsMobile(true) : setIsMobile(false);
    const onWindowResize = () => {
      window.innerWidth <= 767 ? setIsMobile(true) : setIsMobile(false);
    };
    window.addEventListener('resize', onWindowResize);
    return () => window.removeEventListener('resize', onWindowResize);
  }, []);

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const searchBottom = searchLength > 0 ? '0px' : '15vh';
  // console.log(searchLength);
  return (
    <>
      <div className="results-header-image">
        <PageHeader title="Search Articles" />
      </div>

      <div>
        <div style={{ height: '10vh' }}>&nbsp;</div>
        <SearchParams
          searchQuery={searchQuery}
          handleSearchQueryChange={handleSearchQueryChange}
          handleSearchSubmit={handleSearchSubmit}
        />
        <div>
          <Outlet />
        </div>
        <div>
          <div className="text-center" md={{ span: 8, offset: 2 }}>
            <div style={{ height: searchBottom }}>&nbsp;</div>
            {/* {isMobile ? (
              <div style={{ height: searchBottom }}>&nbsp;</div>
            ) : (
              <div aspectdiv={49 / 80}>
                <img src={InfoFooterImg} alt='' />
              </div>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Results;
