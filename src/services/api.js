import axios from 'axios';

const api = axios.create({
  baseURL: 'https://expensemanager-jite.onrender.com', // e.g. http://192.168.1.5:5000/api
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
