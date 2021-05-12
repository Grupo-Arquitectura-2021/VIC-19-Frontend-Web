import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Accounts from '../views/home/Accounts'
import Data from '../views/home/Data'
import Locations from '../views/home/Locations'
import News from '../views/home/News'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    redirect: '/home/accounts', 
    name: 'Home',
    component: Home,
    children:[
      {
        path: 'accounts',
        name: 'Administrar Cuentas',
        component: Accounts,
      },
      {
        path: 'data',
        name: 'Administrar Datos',
        component: Data,
      },
      {
        path: 'locations',
        name: 'Gestionar Locaciones',
        component: Locations,
      },
      {
        path: 'news',
        name: 'Administrar Noticias',
        component: News,
      },

    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
