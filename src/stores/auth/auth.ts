// stores/auth.ts
import { defineStore } from "pinia";
import { login, getMe, logout } from "@/services/auth/auth.service";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as null | { id: string; email: string },
  }),
  actions: {
    async loginUser(email: string, password: string) {
      await login(email, password);
      this.user = await getMe();
    },
    async logoutUser() {
      await logout();
      this.user = null;
    },
  },
});
