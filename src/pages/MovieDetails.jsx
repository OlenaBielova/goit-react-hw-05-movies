import { useState, useEffect } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import {getMovieByID} from '../services/api';

export const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    console.log(movieId);
    console.log(movie);

    useEffect(() => {
        getMovieByID(movieId).then(setMovie);
    }, [movieId])
   
    if (movie) {
        const { poster_path, title, overview, vote_average, genres } = movie;
        console.log(title);
        const gen = genres.map(genre => genre.name + ' ')
        console.log(gen);
        return (
            <>
                <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={`${title}`} />
                <div>
                    <h2>{title}</h2>
                    <p>Rating: {Math.round(vote_average * 10)}%</p>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <p>Genres: {genres.map(genre => genre.name + ' ')}</p>
                </div>
                {/* <Outlet /> */}
            </>
        )
    }
}
export default MovieDetails;