import { Movie } from 'components/Movie/Movie';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import * as API from '../servises/api';
import css from './Pages.module.css';

const MovieDetails = () => {
  const [film, setFilm] = useState({});
  const [releaseYear, setReleaseYear] = useState('');
  const { movieId } = useParams();


  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    API.fetchMovieDetails(movieId)
      .then(response => {
        setFilm(response);

        if (film.release_date) {
          const year = cutDate(film.release_date);
          setReleaseYear(year);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, [film.release_date, movieId]);

  function cutDate(date) {
    const regexp = /([0-9]{4}(?=-))/g;
    const hits = date.match(regexp);
    if (hits !== null) return hits[0];
    return date;
  }

  return (
    <>
      {/* ===========optional chaining */}
      <Link to={backLinkLocationRef.current}>
        <button className={css.GoBackBtn}>← Go back</button>
      </Link>

		{(Object.keys(film).length > 0) && <Movie film={film} year={releaseYear} />}
      
      <div>
        <p>Additional information</p>
        <ul className={css.AdditionalInfoList}>
          <li>
            <Link to="cast" className={css.AdditionalInfo}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" className={css.AdditionalInfo}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>LOADING...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
