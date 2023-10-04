import { createWebHistory, createRouter } from 'vue-router';

import home from './components/home.vue';
import register from './components/register.vue';
import login from './components/login.vue';
import about from './components/about.vue';

const routes = [
  {
    name: 'home',
    path: '/',
    component: home,
  },
  {
    name: 'register',
    path: '/register',
    component: register,
  },
  {
    name: 'login',
    path: '/login',
    component: login,
  },
  {
    name: 'about',
    path: '/about',
    component: about,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
