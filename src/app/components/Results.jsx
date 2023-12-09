import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import SearchParams from './SearchParams';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratio from 'react-bootstrap/Ratio';
import PageHeader from './PageHeader';
import InfoFooterImg from '../images/info-footer.png';
import '../styles/results.css';

const Results = ({ searchQuery, handleSearchQueryChange, handleSearchSubmit, searchLength }) => {
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

  const searchBottom = searchLength > 0 ? '0px' : '10vh';
  console.log(searchLength)
  return (
    <>
      <div className='results-header-image'>
        <PageHeader title='Search Articles' />
      </div>

      <Container>
        <div style={{ height: '10vh'}}>&nbsp;</div>
        <SearchParams searchQuery={searchQuery} handleSearchQueryChange={handleSearchQueryChange} handleSearchSubmit={handleSearchSubmit} />
        <Row>
          <Outlet />
        </Row>
        <Row>
          <Col className='text-center'  md={{ span: 8, offset: 2 }}>
            {isMobile ? (
              <div style={{ height: searchBottom }}>&nbsp;</div>
            ) : (
              <Ratio aspectRatio={49 / 80}>
                <img src={InfoFooterImg} alt='' />
              </Ratio>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Results;