// router/routes/auth.ts
export default [
  {
    path: "/auth",
    name: "auth",
    component: () => import("@/pages/auth.vue"),
    // meta: { guest: true },
  },
  //   {
  //     path: '/login',
  //     name: 'Login',
  //     component: () => import('@/pages/auth/Login.vue'),
  //     meta: { guest: true },
  //   },
  //   {
  //     path: '/register',
  //     name: 'Register',
  //     component: () => import('@/pages/auth/Register.vue'),
  //     meta: { guest: true },
  //   },
];
