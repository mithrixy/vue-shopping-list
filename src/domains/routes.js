import Create from './pages/Create.vue'
import Edit from './pages/Edit.vue'
import Overview from './pages/Overview.vue'

export default [
    {   path: '/create', 
        name: 'create', 
        component: Create },
    {   path: '/edit', 
        name: 'edit',
        component: Edit },
    {   path: '/overview',
        name: 'overview', 
        component: Overview }
]

