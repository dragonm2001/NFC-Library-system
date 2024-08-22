import './assets/styles/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'

// Настройка baseURL для Axios
axios.defaults.baseURL = import.meta.env.VITE_API_URL

const app = createApp(App)

app.config.globalProperties.$axios = axios

app.use(router)
app.mount('#app')
