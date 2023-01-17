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
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    } else {
      return { left: 0, top: 0 };
    }
  },
});

export default router;
