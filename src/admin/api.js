import axios from 'axios';

const token = localStorage.getItem('token');

const headers = {
  'Authorization': `Bearer ${token}`
};

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: headers
});