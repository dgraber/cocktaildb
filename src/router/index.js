import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Drinks from '../components/Drinks.vue';
import DrinkDetails from '../components/DrinkDetails.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/drinks",
    name: "Drinks",
    props: true,
    component: Drinks
  },
  {
    path: "/drinkdetails/:idDrink",
    name: "DrinkDetails",
    props: true,
    component: DrinkDetails
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
