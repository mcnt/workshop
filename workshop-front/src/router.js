// router.js
import { createRouter, createWebHistory } from 'vue-router';

// Importe seus componentes de página aqui
import Home from './components/AtasList.vue';
import Workshops from './components/WorkshopDetails.vue';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/details/:id',
    component: Workshops,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
