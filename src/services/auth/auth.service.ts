// services/auth.service.ts
import api from "../ky";

export const login = (email: string, password: string) => {
  return api.post('auth/login', {
    json: { email, password },
  }).json();
};

export const getMe = () => {
  return api.get('auth/me').json();
};

export const logout = () => {
  return api.post('auth/logout').json();
};
