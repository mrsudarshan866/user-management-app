// // router/guards/auth-guard.ts
// import type { Router } from 'vue-router';
// import { useAuthStore } from '@/stores/auth';

// export function setupAuthGuard(router: Router) {
//   router.beforeEach((to, _from, next) => {
//     const auth = useAuthStore();

//     if (to.meta.requiresAuth && !auth.user) {
//       return next('/login');
//     }

//     if (to.meta.guest && auth.user) {
//       return next('/dashboard');
//     }

//     next();
//   });
// }
