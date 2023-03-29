import css from './Components.module.css';

export const Movie = ({ film, year }) => {
  const genres = film.genres;
  return (
    <div className={css.Film}>
      <img
        className={css.Image}
        //   src={
        //     film.backdrop_path
        //       ? `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${film.backdrop_path}`
        //       : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
        //   }
        src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${film.backdrop_path}`}
        alt=""
      ></img>
      <div className={css.Info}>
        <h2 className={css.FilmTitle}>
          {film.title} ({year})
        </h2>
        <p className={css.Score}>
          User score: {Math.trunc(film.vote_average * 10)}%
        </p>
        <h3 className={css.Overview}>Overview</h3>
        <p className={css.Overview}>{film.overview}</p>
        <h4 className={css.Genres}>Genres</h4>
        <p className={css.Genres}>
          {genres &&
            genres.map(item => <span key={item.id}> {item.name}</span>)}
        </p>
      </div>
    </div>
  );
};
