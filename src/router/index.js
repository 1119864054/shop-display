import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";
import UserPage from "../views/UserPage.vue";
import VerifyPage from "../views/VerifyPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/homepage"
  },
  {
    path: "/homepage",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/userpage",
    name: "UserPage",
    component: UserPage
  },
  {
    path: "/verifypage",
    name: "VerifyPage",
    component: VerifyPage
  }
];

const router = new VueRouter({
  routes
});

export default router;
