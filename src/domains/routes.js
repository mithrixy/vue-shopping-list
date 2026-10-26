import { createWebHistory, createRouter } from 'vue-router'

import Create from './pages/Create.vue'
import Edit from './pages/Edit.vue'
import Overview from './pages/Overview.vue'

const routes = [
    { path: '/create', component: Create },
    { path: '/edit', component: Edit },
    { path: '/overview', component: Overview }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
// define routes to each component - overview,create+edit
