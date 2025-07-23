import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import SEOPlugin from './plugins/seo.js'
import './assets/css/main.css'

/* Import FontAwesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faWhatsapp, faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'

/* Add icons to the library */
library.add(faWhatsapp, faFacebookF, faGoogle)

const app = createApp(App)

app.use(router)
app.use(MotionPlugin)
app.use(SEOPlugin)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
