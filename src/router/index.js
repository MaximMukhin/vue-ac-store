import { createRouter, createWebHistory } from 'vue-router'
/* import Home from '../views/Home.vue' */
import Catalog from '../components/Catalog.vue'

const routes = [
    {path: '/', name: 'Catalog', component: Catalog, props: true},

    {path: '/Cart', name: 'Cart', component: () => import('../components/Cart.vue'), props: true},

/*   {path: '/', name: 'Home', component: Home}, */

/*   {path: '/about', name: 'About', component: () => import('../views/About.vue')} */
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
