import { Link } from 'react-router-dom';

export const MoviesList = ({ movies, clickHandler }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li
          key={movie.id}
          onClick={() => clickHandler(movie.id)}
          //  className={css.ImageGalleryItem}
        >
          <Link to={`/movies/${movie.id}`}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
