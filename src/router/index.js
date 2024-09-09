import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../pages/LoginPage.vue'
import UsersPage from '../pages/UsersPage.vue'
// import FinesPage from '../pages/FinesPage.vue'
// import BooksPage from '../pages/BooksPage.vue'
// import NotificationsPage from '../pages/NotificationsPage.vue'
// import SettingsPage from '../pages/SettingsPage.vue'
// import ProfilePage from '../pages/ProfilePage.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/users',
    name: 'Users',
    component: UsersPage
  }
  // {
  //   path: '/fines',
  //   name: 'Fines',
  //   component: FinesPage
  // },
  // {
  //   path: '/books',
  //   name: 'Books',
  //   component: BooksPage
  // },
  // {
  //   path: '/notifications',
  //   name: 'Notifications',
  //   component: NotificationsPage
  // },
  // {
  //   path: '/settings',
  //   name: 'Settings',
  //   component: SettingsPage
  // },
  // {
  //   path: '/profile',
  //   name: 'Profile',
  //   component: ProfilePage
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
