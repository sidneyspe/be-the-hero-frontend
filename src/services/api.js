import axios from 'axios';

const URL_DEVELOPMENT = 'http://localhost:3333';

const api = axios.create({
  baseURL: URL_DEVELOPMENT,
});

export default api;
