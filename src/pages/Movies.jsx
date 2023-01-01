import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByName } from '../services/api';
import { MoviesList } from '../components/MoviesList';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [movies, setMovies] = useState([]);

  const handleInputChange = e => setSearchParams({ query: e.target.value });

  const handleSearchFormSubmit = e => {
    e.preventDefault();
    document.getElementById('searchForm').reset();

    if (query === '') {
      alert('Type your search query!');
    } else {
      getMovieByName(query).then(setMovies);
    }
  };

  return (
    <>
      <form id="searchForm" onSubmit={handleSearchFormSubmit}>
        <input
          onChange={handleInputChange}
          type="text"
          autoComplete="off"
          autoFocus
        ></input>
        <button type="submit">Search</button>
        {movies && <MoviesList movies={movies} />}
      </form>
    </>
  );
};
