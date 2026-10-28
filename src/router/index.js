import { createRouter, createWebHistory } from 'vue-router'
import groceriesRoutes from '../domains/routes.js'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...groceriesRoutes
  ],
})

console.log(groceriesRoutes)