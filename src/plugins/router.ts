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
  scrollBehavior(to, from, scroll) {
    return new Promise((resolve) => {
      setTimeout(
        () => {
          if (!to.hash && !scroll) resolve({ top: 0, behavior: "smooth" });
          else if (scroll) resolve({ ...scroll, behavior: "smooth" });
          else resolve({ el: to.hash, behavior: "smooth" });
        },
        to.path == from.path ? 0 : 500
      );
    });
  },
});

export default router;
