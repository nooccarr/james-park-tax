import { Outlet } from 'react-router-dom';
import SearchParams from './SearchParams';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PageHeader from './PageHeader';

const Results = ({ searchQuery, handleSearchChange }) => {
  return (
    <>
      <div>
        <PageHeader title='Search Articles' />
      </div>

      <Container>
        <SearchParams
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
        />
        <Row>
          <Outlet />
        </Row>
      </Container>
    </>
  );
};

export default Results;