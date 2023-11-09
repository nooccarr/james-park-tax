import { Outlet } from 'react-router-dom';
import SearchParams from './SearchParams';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PageHeader from './PageHeader';
import SearchImg from '../images/search.png';
import '../styles/results.css';

const Results = ({ searchQuery, handleSearchQueryChange, handleSearchSubmit }) => {
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
          <Col className='text-center pb-5'>
            <img src={SearchImg} alt='' />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Results;