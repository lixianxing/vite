import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './style/index.scss'
console.log('环境变量', import.meta.env)
const app = createApp(App)
app.use(router)
app.mount('#app')