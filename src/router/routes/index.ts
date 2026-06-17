// router/routes/index.ts
import auth from './auth';
import dashboard from './dashboard';
import setup from './setup';

export default [
  ...auth,
  ...dashboard,
  ...setup,
  { path: '/:pathMatch(.*)*', redirect: '/login' }, // fallback
];
