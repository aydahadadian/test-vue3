import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/DashboardPage.vue'
import Todos from '../pages/TodosPage.vue'
import Weather from '../pages/WeatherPage.vue'
import Profile from '../pages/ProfilePage.vue'

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
    }
  ]
})

export default router
