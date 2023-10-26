import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

const SearchParams = ({ searchQuery, handleSearchChange }) => {


  return (
    <div>
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