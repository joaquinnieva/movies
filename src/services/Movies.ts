import axios from 'axios';

export const getMovieDetail = (id: string) => {
  return axios.get(`/3/movie/${id}?language=es-ES`);
};
export const getSimilarMovies = (id: string) => {
  return axios.get(`/3/movie/${id}/similar?language=es-ES&page=1`);
};
