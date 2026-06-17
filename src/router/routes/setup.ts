// router/routes/setup.ts
export default [
  {
    path: "/setup",
    component: () => import("@/pages/setup.vue"),
    meta: { requiresAuth: true },
    // children: [
    //   {
    //     path: 'organization',
    //     name: 'SetupOrganization',
    //     component: () => import('@/pages/setup/Organization.vue'),
    //   },
    //   {
    //     path: 'profile',
    //     name: 'SetupProfile',
    //     component: () => import('@/pages/setup/Profile.vue'),
    //   },
    // ],
  },
];
