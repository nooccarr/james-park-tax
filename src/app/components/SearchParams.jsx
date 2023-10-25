import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    search: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      search: formData.get('search') ?? ''
    };
    setRequestParams(data);

    console.log('Search request!');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">
          Search
          <input id="search" name="search" placeholder="Search" />
        </label>

        <button>Submit</button>
      </form>
      <div>
        <Link to='/'>
          <FontAwesomeIcon icon={faXmark} />
        </Link>
      </div>
    </div>
  );
};

export default SearchParams;

// TODO:
// Filter by category: All, Tax, Medicare