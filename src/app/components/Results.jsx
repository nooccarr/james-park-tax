import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import SearchParams from './SearchParams';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratio from 'react-bootstrap/Ratio';
import PageHeader from './PageHeader';
import InfoFooterImg from '../images/info-footer.png';
import '../styles/results.css';

const Results = ({ searchQuery, handleSearchQueryChange, handleSearchSubmit }) => {

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

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
            <Ratio aspectRatio={49 / 80}>
              <img src={InfoFooterImg} alt='' />
            </Ratio>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Results;