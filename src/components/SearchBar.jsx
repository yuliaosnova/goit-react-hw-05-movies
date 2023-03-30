import { useState } from 'react';

export const SearchBar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.target.value.trim().toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('query:', searchQuery);

   //  if (searchQuery === '') {
   //    return;
   //  }
    onSubmit(searchQuery);
    // setSearchQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className=""
        type="text"
      //   value={searchQuery}
        autoFocus
        onChange={handleChange}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};
 