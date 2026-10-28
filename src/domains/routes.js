import Create from './pages/Create.vue'
import Edit from './pages/Edit.vue'
import Overview from './pages/Overview.vue'

export default [
    {   path: '/',
        redirect: '/overview' },
    {   path: '/overview',
        name: 'overview', 
        component: Overview },
    {   path: '/create', 
        name: 'create', 
        component: Create },
    {   path: '/edit', 
        name: 'edit',
        component: Edit }
]

