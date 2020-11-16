import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/style/reset.css'
import '@/assets/fonts/iconfont.css'
import '@/assets/js/app-flexible.js'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
