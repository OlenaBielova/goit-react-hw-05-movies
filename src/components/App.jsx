// import { useEffect } from "react";
// import { getTrendingMovies } from "services/api";
import { Routes, Route, NavLink } from "react-router-dom";
import { Home } from "pages/Home";
import MovieDetails from "../pages/MovieDetails";
import { Movies } from "../pages/Movies";
import { Cast } from "./Cast";
import { Reviews } from "./Reviews";
import { NotFound } from "./NotFound";


export const App = () => {  
  return (  
    <div>
      <header>
          <nav>
          <NavLink to="/" >Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} >
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>
        {/* <Route path="/" element={< />} />
        <Route path="/about" element={< />} />
        <Route path="/products" element={< />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
