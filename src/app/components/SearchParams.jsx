import { useState } from 'react';

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
    </div>
  );
};

export default SearchParams;