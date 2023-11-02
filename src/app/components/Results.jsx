import { Outlet } from 'react-router-dom';
import SearchParams from './SearchParams';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PageHeader from './PageHeader';
import '../styles/results.css';

const Results = ({ searchQuery, handleSearchChange }) => {
  return (
    <>
      <div className='results-header-image'>
        <PageHeader title='Search Articles' />
      </div>

      <Container className='pt-5'>
        <div className='pb-5'>
          <SearchParams searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
        </div>
        <Row>
          <Outlet />
        </Row>
      </Container>
    </>
  );
};

export default Results;