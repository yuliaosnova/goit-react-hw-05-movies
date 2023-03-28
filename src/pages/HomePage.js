import { MoviesList } from 'components/MoviesList';
import { useState, useEffect } from 'react';
import * as API from '../servises/api';

const Home = () => {
  const [movies, setMovies] = useState([1, 2, 3]);
  const [clickedLinkId, setclickedLinkId] = useState('');

  useEffect(() => {
    API.fetchPopularMovies()
      .then(response => {
        //   if (movies.hits.length === 0) {
        //     alert('no matching results');
        //   }
        console.log(response.results);
        setMovies(response.results);
        //   setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const getClikedLinkId = id => {
	console.log('id', id);
	setclickedLinkId(id);

	// setCurrentPicture(() => pictures.filter(picture => picture.id === id));

	// toggleModal();
 };

  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList movies={movies} clickHandler={getClikedLinkId} />
    </div>
  );
};

export default Home;
