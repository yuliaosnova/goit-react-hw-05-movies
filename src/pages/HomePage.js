import { MoviesList } from 'components/MoviesList';
import { useState, useEffect } from 'react';
import * as API from '../servises/api';

const Home = () => {
  const [movies, setMovies] = useState([1, 2, 3]);

  useEffect(() => {
    API.fetchPopularMovies()
      .then(response => {
        //   if (movies.hits.length === 0) {
        //     alert('no matching results');
        //   }
        console.log(response.results);
        setMovies(response.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
