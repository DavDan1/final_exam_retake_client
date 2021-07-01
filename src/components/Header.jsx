import React from 'react';

const Header = () => {
  return (
    <div data-cy='header-container'>
      <h1 data-cy='header-text'>Kensington and Chelsea Social Council API</h1>
      <input data-cy='search-input'/>
      <button data-cy='search-btn'></button>
    </div>
  );
};

export default Header;
