// services/ky.ts
import ky from 'ky';

const api = ky.create({
  prefixUrl: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include', // for cookies / auth
  hooks: {
    beforeRequest: [
      request => {
        // Optionally inject tokens here
        const token = localStorage.getItem('access_token');
        if (token) {
          request.headers.set('Authorization', `Bearer ${token}`);
        }
      },
    ],
    afterResponse: [
      (_request, _options, response) => {
        // Add global response handling or refresh tokens here
        if (response.status === 401) {
          console.warn('Unauthorized — redirect or logout here');
        }
      },
    ],
  },
});

export default api;
