
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../servises/api';
import css from './Components.module.css';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  // console.log(movieId);

  useEffect(() => {
    API.fetchMovieCast(movieId)
      .then(response => {
        //   if (movies.hits.length === 0) {
        //     alert('no matching results');
        //   }
        console.log(response);
        setCast(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

//   const showCast = () => {
// 	if (cast.length > 0) return true;
//   }

  return (
    <>
      <div className={css.Cast}>
		cast
        {cast.map(actor => (
          <div>
            <img
              className={css.ActorPhoto}
              src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${actor.profile_path}`}
              alt=""
            ></img>
            <p>{actor.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};
