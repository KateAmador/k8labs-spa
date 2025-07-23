import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import SEOPlugin from './plugins/seo.js'
import './assets/css/main.css'

const app = createApp(App)

app.use(router)
app.use(MotionPlugin)
app.use(SEOPlugin)
app.mount('#app')
