import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/myresume/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/myresume/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/myresume/portfolio",
    name: "Portfolio",
    component: () => import("../views/Portfolio.vue"),
  },
  {
    path: "/myresume/contacts",
    name: "Contacts",
    component: () => import("../views/Contacts.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
