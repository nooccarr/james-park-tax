import Stack from 'react-bootstrap/Stack';
import '../styles/search-params.css';

const SearchParams = ({ searchQuery, handleSearchQueryChange, handleSearchSubmit }) => {


  return (
    <section>
      <form onSubmit={handleSearchSubmit}>
        <Stack direction='horizontal' gap={0}>
          <label htmlFor='search'></label>
          <input
              type='search'
              name='search'
              id='search'
              autoComplete='off'
              className='search-bar mb-0 me-auto search-shadow'
              value={searchQuery}
              onChange={handleSearchQueryChange}
              />
          <button className='search-button search-shadow'>Search</button>
        </Stack>
      </form>
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