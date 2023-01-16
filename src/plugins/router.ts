import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/rybolovstvo",
    name: "Rybolovstvo",
    component: () => import("@/views/Rybolovstvo.vue"),
  },

  {
    path: "/jivotnovodstvo",
    name: "Jivotnovodstvo",
    component: () => import("@/views/Jivotnovodstvo.vue"),
  },

  {
    path: "/rastenievodstvo",
    name: "Rastenievodstvo",
    component: () => import("@/views/Rastenievodstvo.vue"),
  },

  {
    path: "/pererabotka",
    name: "Pererabotka",
    component: () => import("@/views/Pererabotka.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
