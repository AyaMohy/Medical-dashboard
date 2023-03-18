import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/employee',
      name: 'Employee',
      component: () => import('../views/Employee/ListEmployees.vue'),
    },
    {
      path: '/patient',
      name: 'Patient',
      component: () => import('../views/Patients/ListPatient.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
