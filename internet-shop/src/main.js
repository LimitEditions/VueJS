import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/style.css'
import store from './store'
import router from './router'

createApp(App).use(store).use(router).mount('#app')
