import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { SearchBar } from 'components/SearchBar';
import { useEffect, useState } from 'react';
import * as API from '../servises/api';

const Movies = () => {
  const [moviesBySeach, setMoviesBySeach] = useState([]);
  const [page, setPage] = useState(1);

  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const changeQuery = searchQuery => {
    console.log(searchQuery);

    if (searchQuery === query) return;

	 if (searchQuery === "") {
		return setSearchParams({});
	 }



    setMoviesBySeach([]);
    setPage(1);
    setSearchParams({ query: searchQuery });
  };

  useEffect(() => {
    API.fetchSerchedMovies(query, page)
      .then(resp => {
        //   if (resp.length === 0) {
        //     alert('no matching results');
        //   }

        //   setMoviesBySeach(moviesBySeach => [...moviesBySeach, ...resp]);
        setMoviesBySeach(resp);
      })
      .catch(error => {
        console.log(error);
      });
  }, [page, query]);

  return (
    <div>
      <SearchBar onSubmit={changeQuery} />
      <ul>
        {moviesBySeach.map(item => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`} state={{ from: location }}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
