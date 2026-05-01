import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const publicPaths = ['/v1/auth/login', '/v1/auth/register', '/v1/auth/refresh-token'];

api.interceptors.request.use((config) => {
  const isPublicPath = publicPaths.some((path) => config.url?.includes(path));

  if (!isPublicPath) {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

export default api;
