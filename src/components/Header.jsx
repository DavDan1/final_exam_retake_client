import React, { useState } from 'react';
import axios from 'axios';

const Header = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchServices = async (query) => {
    const response = await axios.post(
      `https://kcsc-api.herokuapp.com/api/search?q=${query}`
    );
    setResults(response.data.services);
  };
  const search = () => {
    searchServices(query);
    setQuery('');
  };

  const resultList = results.map((result) => {
    return (
      <div key={result.id} data-cy='results-list'>
        <h3>{result.name}</h3>
        <p>{result.description}</p>
      </div>
    );
  });
  return (
    <>
      <div data-cy='header-container'>
        <h1 data-cy='header-text'>Kensington and Chelsea Social Council API</h1>
        <input
          data-cy='search-input'
          type='text'
          placeholder='search here'
          onChange={(event) => setQuery(event.target.value)}
        />
        <button data-cy='search-btn' type='button' onClick={search}>
          Search
        </button>
        <div data-cy='results-container'>
          <div>{resultList}</div>
        </div>
      </div>
    </>
  );
};

export default Header;
