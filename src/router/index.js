import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/list/:page',
    name: 'list',
    props(route) {
      const props = { ...route.params };
      props.page = +props.page;
      return props;
    },
    component: () => import(/* webpackChunkName: "mainStage" */ '../views/MainStage.vue')
  },
  {
    path: '/character/:id/',
    name: 'characterDetails',
    props(route) {
      const props = { ...route.params };
      props.id = +props.id;
      return props;
    },
    component: () => import(/* webpackChunkName: "mainStage" */ '../views/MainStage.vue')
  },
  {
    path: '*',
    redirect: '/'
  }

];

const router = new VueRouter({
  routes,
  base: '/',
});


export default router
