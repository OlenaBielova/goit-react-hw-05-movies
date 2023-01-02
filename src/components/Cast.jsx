import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from '../services/api';
import { CastList, ImgBox, ItemBox } from './Cast.styled';

const Cast = id => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then(setCast);
  }, [movieId]);

  if (cast) {
    return (
      <CastList>
        {cast.map(({ name, character, cast_id, profile_path }) => (
          <ItemBox key={cast_id}>
            <ImgBox>
              <img
                src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                width="100px"
                alt=""
              />
            </ImgBox>
            <p>{name}</p>
            <p>{character}</p>
          </ItemBox>
        ))}
      </CastList>
    );
  }
};

export default Cast;