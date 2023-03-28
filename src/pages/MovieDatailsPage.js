import { Cast } from 'components/Cast';
import { Reviews } from 'components/Reviews';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import * as API from '../servises/api';
import css from './Pages.module.css';

const MovieDetails = () => {
  const [film, setFilm] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    API.fetchMovieDetails(movieId)
      .then(response => {
        //   if (movies.hits.length === 0) {
        //     alert('no matching results');
        //   }
        //   console.log(response);
        setFilm(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  const genres = film.genres;

  return (
    <>
      <div className={css.Film}>
        <img
          className={css.Image}
          src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${film.backdrop_path}`}
          alt=""
        ></img>
        <div className={css.Info}>
          <h2 className={css.FilmTitle}>{film.title}</h2>
          <p className={css.Score}>
            User score: {Math.trunc(film.vote_average * 10)}%
          </p>
          <h3 className={css.Overview}>Overview</h3>
          <p className={css.Overview}>{film.overview}</p>
          <h4 className={css.Genres}>Genres</h4>
          <p className={css.Genres}>
            {/* {genres.map(item => (
            <span key={item.id}> {item.name}</span>
          ))} */}

            {genres &&
              genres.map(item => <span key={item.id}> {item.name}</span>)}
          </p>
        </div>
        <Outlet />
      </div>
      <div>
        Additional information
        <Cast />
        <Reviews />
      </div>
    </>
  );
};

export default MovieDetails;
