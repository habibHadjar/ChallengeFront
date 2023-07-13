import axios from 'axios';

const api = axios.create({
  baseURL: 'localhost:5050/api',
});

export default api;
