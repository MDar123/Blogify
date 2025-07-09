import App from './App.vue'
import './assets/main.css'

import { createApp } from 'vue'
import router from './router'

createApp(App).use(router).mount('#app')
