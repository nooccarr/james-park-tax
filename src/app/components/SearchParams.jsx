import { Link } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

const SearchParams = ({ searchQuery, handleSearchChange }) => {


  return (
    <header>
      <Stack direction='horizontal' gap={3}>
        <div className='me-auto'>
          <form>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <label htmlFor="search">
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
        </div>

        <div className='p-2'>
          <Link to='/'>
            <FontAwesomeIcon icon={faXmark} />
          </Link>
        </div>
      </Stack>
    </header>
  );
};

export default SearchParams;

// TODO:
// Filter by category: All, Tax, Medicare