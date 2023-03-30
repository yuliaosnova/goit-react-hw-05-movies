import { MoviesList } from 'components/MoviestList/MoviesList';
import { useState, useEffect } from 'react';
import * as API from '../servises/api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    API.fetchPopularMovies()
      .then(response => {
        //   if (movies.hits.length === 0) {
        //     alert('no matching results');
        //   }
      //   console.log(response.results);
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
