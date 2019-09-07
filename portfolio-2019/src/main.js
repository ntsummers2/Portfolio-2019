import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

//Import Pages
import Home from './components/Pages/Home.vue'
import MsuApp from './components/Pages/MsuApp.vue'

// Import Styles
import './assets/styles/normalize.css'

// Import Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faMap, faSearchPlus, faVoteYea, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faCodepen, faApple, faAndroid } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub, faLinkedin, faCodepen, faAndroid, faApple, faSearch, faMap, faSearchPlus, faVoteYea, faArrowLeft, faClock)

Vue.component('font-awesome-icon', FontAwesomeIcon)

//Setup Router
Vue.use(VueRouter)
const routes = [
  { path: '/', component: Home },
  { path: '/msuapp', component: MsuApp, props: true }
]
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
