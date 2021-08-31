import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Particles from "particles.vue3";

library.add(faLinkedin, faGithub, faBars)

createApp(App)
.use(router)
.use(Particles)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
