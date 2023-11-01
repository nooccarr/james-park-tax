import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchParams = ({ searchQuery, handleSearchChange }) => {


  return (
    <header>
      <Stack direction='horizontal'>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </InputGroup.Text>
          <Form.Control
            type='search'
            aria-label="Search"
            aria-describedby="basic-addon1"
            autoComplete='off'
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </InputGroup>

        <Button className='ms-3'>Search</Button>
      </Stack>
    </header>
  );
};

export default SearchParams;

// TODO<
// Filter by category: All, Tax, Medice