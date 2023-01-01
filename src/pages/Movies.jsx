import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByName } from '../services/api';
import { MoviesList } from '../components/MoviesList';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get('query') ?? '');
  const searchQuery = searchParams.get('query');
  const [movies, setMovies] = useState([]);

  const handleInputChange = e => setQuery(e.target.value);

  const handleSearchFormSubmit = e => {
    e.preventDefault();
    document.getElementById('searchForm').reset();

    if (query !== '') {
      setSearchParams({ query: query });
      //   getMovieByName(query).then(setMovies);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      getMovieByName(searchQuery).then(setMovies);
    }
  }, [searchQuery]);

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
