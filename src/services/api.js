// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://expensemanager-jite.onrender.com/',
  timeout: 20000, // 👈 REQUIRED
  headers: {
    'Content-Type': 'application/json',
  },
});
api.interceptors.response.use(
  res => res,
  err => {
    console.log('API ERROR:', err?.response || err?.message);
    return Promise.reject(err);
  }
);

export default api;
