import * as VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Methodology from "./components/Methodology";

const routes = [
  { path: "/", component: Home },
  { path: "/methodology", component: Methodology },
];
export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});
