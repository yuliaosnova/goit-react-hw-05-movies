import { Link } from 'react-router-dom';
import { SearchBar } from 'components/SearchBar';
import { useState } from 'react';
import * as API from '../servises/api';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [moviesBySeach, setMoviesBySeach] = useState([]);
  const [page, setPage] = useState(1);

  async function changeQuery(searchQuery) {
    if (searchQuery === query) return;

    setMoviesBySeach([]);
    setPage(1);
     setQuery(searchQuery);
	  await getMovies();
  }

  function getMovies() {
    API.fetchSerchedMovies(query, page)
      .then(resp => {
        if (resp.length === 0) {
          alert('no matching results');
        }

        setMoviesBySeach(moviesBySeach => [...moviesBySeach, ...resp]);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div>
      <SearchBar onSubmit={changeQuery} />
      <ul>
        {moviesBySeach.map(item => (
          <li key={item.id}>
            <Link>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
