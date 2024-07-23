import { createApp } from 'vue'
import router from './router.ts'
import App from './App.vue'

import './config.scss'
import './main.scss'

createApp(App)
  .use(router)
  .mount('#app')