import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/js/app-flexible.js'
import '@/assets/style/reset.css'
import '@/assets/fonts/iconfont.css'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
