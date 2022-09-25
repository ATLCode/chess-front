import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import GameHistory from "../views/GameHistory.vue";
import Statistics from "../views/Statistics.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/GameHistory",
      name: "gamehistory",
      component: GameHistory,
    },
    {
      path: "/Statistics",
      name: "statistics",
      component: Statistics,
    },
  ],
});

export default router;
