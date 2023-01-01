import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from '../services/api';

export const Cast = id => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then(setCast);
  }, [movieId]);

  if (cast) {
    return (
      <>
        {cast.map(({ name, character, cast_id, profile_path }) => (
          <li key={cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/w300${profile_path}`}
              width="150px"
              alt=""
            />
            <p>{name}</p>
            <p>{character}</p>
          </li>
        ))}
      </>
    );
  }
};
