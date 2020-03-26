import axios from 'axios';

const URL_DEVELOPMENT = 'http://localhost:3001';

const api = axios.create({
  baseURL: URL_DEVELOPMENT,
});

export default api;
