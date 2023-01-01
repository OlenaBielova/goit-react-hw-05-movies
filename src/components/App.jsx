// import { useEffect } from "react";
// import { getTrendingMovies } from "services/api";
import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home';
import { MovieDetails } from '../pages/MovieDetails';
import { AppBar } from './AppBar';
import { Movies } from '../pages/Movies';
import { Cast } from './Cast';
import { Reviews } from './Reviews';
import { NotFound } from './NotFound';

export const App = () => {
  return (
    <div>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
