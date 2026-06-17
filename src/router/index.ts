// router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
// import { setupAuthGuard } from './guards/auth-guard';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// setupAuthGuard(router);

export default router;
