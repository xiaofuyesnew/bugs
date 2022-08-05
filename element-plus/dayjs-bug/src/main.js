import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import dayjs from 'dayjs'

console.log(dayjs.now())

createApp(App).mount('#app')
