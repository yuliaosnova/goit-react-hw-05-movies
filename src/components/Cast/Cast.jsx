import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../servises/api';
import css from './Cast.module.css';
import { BsFillPersonFill } from 'react-icons/bs';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    API.fetchMovieCast(movieId)
      .then(responce => {
        setCast(responce);
		  if (responce.length === 0) setShowMessage(true);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  return (
    <>
      <ul className={css.Cast}>
        {cast.map(actor => (
          <li className={css.CastList} key={actor.cast_id}>
            {actor.profile_path ? (
              <img
                className={css.ActorPhoto}
                src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${actor.profile_path}`}
                alt=""
              ></img>
            ) : (
              <BsFillPersonFill style={{ fontSize: '50px' }} fill="blue" />
            )}
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
		{showMessage && "We don't have any information about cast"}
    </>
  );
};

export default Cast;
