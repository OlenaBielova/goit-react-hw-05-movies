import { useState, useEffect } from 'react';
// import { Outlet } from "react-router-dom";
import { getTrendingMovies } from 'services/api';
import { MoviesList } from '../components/MoviesList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  return (
    <div>
      Trending movies list
      {movies && <MoviesList movies={movies} />}
    </div>
  );
};
