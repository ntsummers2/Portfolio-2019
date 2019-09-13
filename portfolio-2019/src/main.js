import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

//Import Pages
import Home from './components/Pages/Home.vue'
import MsuApp from './components/Pages/MsuApp.vue'
import USearch from './components/Pages/USearch.vue'
import Search from './components/Pages/Search.vue'
import Maps from './components/Pages/Maps.vue'
import Qualtrics from './components/Pages/Qualtrics.vue'

// Import Styles
import './assets/styles/normalize.css'

// Import Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faSearch, faMap, faSearchPlus, faVoteYea, faArrowLeft, faUserTag, faCloud } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faCodepen, faApple, faAndroid } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub, faLinkedin, faCodepen, faAndroid, faApple, 
  faSearch, faMap, faSearchPlus, faVoteYea, faArrowLeft, faClock,
  faUserTag, faCloud)

Vue.component('font-awesome-icon', FontAwesomeIcon)

//Setup Router
Vue.use(VueRouter)
const routes = [
  { path: '/', component: Home },
  { path: '/msuapp', component: MsuApp, props: true },
  { path: '/usearch', component: USearch, props: true },
  { path: '/search', component: Search, props: true },
  { path: '/maps', component: Maps, props: true },
  { path: '/qualtrics', component: Qualtrics, props: true }
]
const router = new VueRouter({
  routes,
  scrollBehavior() {
    return {x: 0, y: 0}
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
