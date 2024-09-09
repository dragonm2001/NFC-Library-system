import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../pages/Home.vue'
// import About from '../pages/About.vue'
import LoginPage from '../pages/LoginPage.vue' // Импортируем новый компонент

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: About
  // },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage // Используем новое имя компонента
  }
  // Добавьте другие маршруты здесь
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
