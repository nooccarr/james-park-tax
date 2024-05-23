import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '../styles/search-params.css';

const SearchParams = ({
  searchQuery,
  handleSearchQueryChange,
  handleSearchSubmit,
}) => {
  return (
    <section>
      <form onSubmit={handleSearchSubmit}>
        <div>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="search-icon m-5"
          />
          <label htmlFor="search" className="search-label">
            <input
              type="search"
              name="search"
              id="search"
              autoComplete="off"
              placeholder="Search articles by title or description"
              className="search-input py-4 ps-12 pe-5"
              value={searchQuery}
              onChange={handleSearchQueryChange}
            />
          </label>
        </div>
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
