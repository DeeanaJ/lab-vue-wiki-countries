// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'root',
    component: HomeView,
  },
  {
    path: '/:countryCode',
    name: 'countryDetails',
 },

];

export default createRouter({
  history: createWebHistory('/'),
  routes,
});