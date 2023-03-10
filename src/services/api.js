import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '50331c259a8d216f974a09fadb8f8a27';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

export const getTrendingMovies = async () => {
  const response = await axios.get('/trending/movie/day');
  return response.data.results;
};

export const getMovieByName = async query => {
  const response = await axios.get(`/search/movie?query=${query}`);
  return response.data.results;
};

export const getMovieByID = async id => {
  const response = await axios.get(`/movie/${id}`);
  return response.data;
};

export const getMovieCast = async id => {
  const response = await axios.get(`/movie/${id}/credits`);
  return response.data.cast;
};

export const getMovieReviews = async id => {
  const response = await axios.get(`/movie/${id}/reviews`);
  return response.data.results;
};
