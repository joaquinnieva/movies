import axios from 'axios';

export const getExplore = (filters: object) => {
  const params = { include_adult: false, include_video: false, language: 'es-ES', sort_by: 'popularity.desc', ...filters };
  return axios.get('/3/discover/movie', { params });
};
export const getSearch = (filters: object) => {
  const params = { include_adult: false, include_video: false, language: 'es-ES', sort_by: 'popularity.desc', ...filters };
  return axios.get('/3/search/movie', { params });
};
