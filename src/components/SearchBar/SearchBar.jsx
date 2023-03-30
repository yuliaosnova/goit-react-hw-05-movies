import { useState } from 'react';
import PropTypes from 'prop-types';

export const SearchBar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.target.value.trim().toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('query:', searchQuery);

    onSubmit(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className=""
        type="text"
        autoFocus
        onChange={handleChange}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};

SearchBar.propTypes = {
	onSubmit: PropTypes.func.isRequired,
 };
 