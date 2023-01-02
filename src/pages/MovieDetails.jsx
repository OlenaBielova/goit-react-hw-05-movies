import { useState, useEffect } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { getMovieByID } from '../services/api';
import { BackLink } from '../components/backLink';
import { Container, Wrapper, Img } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    getMovieByID(movieId).then(setMovie);
  }, [movieId]);

  if (movie) {
    const { poster_path, title, overview, vote_average, genres } = movie;
    const genresList = genres.map(genre => genre.name + ' ');

    return (
      <div>
        <BackLink to={backLinkHref}>Go back</BackLink>
        {/* <Link to={location.state.from}>Back to products</Link>; */}
        <Container>
          <Img
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt={`${title}`}
          />
          <div>
            <h2>{title}</h2>
            <h3>Rating: {Math.round(vote_average * 10)}%</h3>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres: {genresList}</h3>
            <Wrapper>
              <Link to={`cast`}>Cast</Link>
              <Link to={`reviews`}>Reviews</Link>
            </Wrapper>
            <Outlet />
          </div>
        </Container>
      </div>
    );
  }
};

export default MovieDetails;
