import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

const SearchParams = ({ searchQuery, handleSearchChange }) => {


  return (
    <header>
      <Container fluid>
        <Row>
          <Col>
            <form>
              <label htmlFor="search">
                <Link to='/search'>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Link>
                <input
                  id="search"
                  name="search"
                  placeholder="Search"
                  autoComplete='off'
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </label>
              </form>
          </Col>
          <Col>
            <div>
              <Link to='/'>
                <FontAwesomeIcon icon={faXmark} />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default SearchParams;

// TODO:
// Filter by category: All, Tax, Medicare