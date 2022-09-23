import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
//This directs the user to the correct page when a link is pressed.
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Tasks',
    name: 'Tasks',
    component: () => import('../views/Tasks.vue')
  },
  {
    path: '/About',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
