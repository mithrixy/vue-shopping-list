import { createRouter, createWebHistory } from 'vue-router'
import groceriesRoutes from './domains/routes.js'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...groceriesRoutes
  ],
})

export default router