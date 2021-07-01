import React, { useState } from 'react';
import axios from 'axios';

const Header = () => {
  const [text, setText] = useState('');
  const [results, setResults] = useState([]);

  const searchServices = async (services) => {
    const response = await axios.post(
      `https://kcsc-api.herokuapp.com/api/search?q=${services}`
    );
    setResults(response.data.services);
  };
  const onSubmit = (event) => {
    searchServices(text);
    setText('');
  };

  const onChange = (event) => setText(event.target.value);
  let resultList = results.map((result) => {
 
    return (
      <div data-cy='results-list'>
        <p>{result.name}</p>
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
          placeholder='search'
          onChange={onChange}
        />
        <button data-cy='search-btn' type='submit' onClick={onSubmit}>
          Search
        </button>
        <div data-cy='results-container'>
          <div >{resultList}</div>
        </div>
      </div>
    </>
  );
};

export default Header;
