import { useState, useEffect } from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
import { getMovieByID } from '../services/api';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieByID(movieId).then(setMovie);
  }, [movieId]);

  if (movie) {
    const { poster_path, title, overview, vote_average, genres } = movie;
    const genresList = genres.map(genre => genre.name + ' ');

    return (
      <>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={`${title}`}
        />
        <div>
          <h2>{title}</h2>
          <p>Rating: {Math.round(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <p>Genres: {genresList}</p>
          <Link to={`cast`}>Cast</Link>
          <Link to={`reviews`}>Reviews</Link>
          <Outlet />
        </div>
      </>
    );
  }
};
