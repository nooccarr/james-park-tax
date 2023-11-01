import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchParams = ({ searchQuery, handleSearchChange }) => {


  return (
    <section>
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
    </section>
  );
};

export default SearchParams;

// TODO:
// Filter by category: All, Tax, Medicare

// TODO: integrate form data for search button

// e.preventDefault();

// const formData = new FormData(e.target);
// const data = {
//   name: formData.get('name') ?? '',
//   email: formData.get('email') ?? '',
//   subject: formData.get('subject') ?? '',
//   message: formData.get('message') ?? ''
// };
// setFormValues(data);
// // TODO:
// // - send email
// // - setRecords([...records, { ...formValues, id: uuidv4() }]);
// handleCloseButtonClick();
// setShowFormSuccess(true);

// console.log("Contact form sent");