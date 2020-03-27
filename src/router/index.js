import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Register from '@/views/register'
import Layout from '@/views/layout'
import MainLayout from '@/views/main-layout'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login, name: 'login' },
  { path: '/register', component: Register, name: 'register' },
  {
    path: '/',
    component: Layout,
    children:
    [
      { path: '/', component: MainLayout }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
