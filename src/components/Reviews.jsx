import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../servises/api';

export const Reviews = () => {
  const [reviews, setReviews] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    API.fetchMovieReviews(movieId)
      .then(responce => {
        console.log(responce);
        setReviews(responce);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  return(
	<>
		<div>reviews</div>
	</>
  )
};
