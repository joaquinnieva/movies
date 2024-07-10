import axios from 'axios';

export const getGenres = () => {
  return axios.get(`/3/genre/movie/list?language=en`);
};
