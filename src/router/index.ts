import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/Dashboard.vue'
import Todos from '../pages/Todos.vue'
import Weather from '../pages/Weather.vue'
import Profile from '../pages/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/todos',
      name: 'Todos',
      component: Todos
    },
    {
      path: '/weather',
      name: 'Weather',
      component: Weather
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },

  ]
})

export default router
