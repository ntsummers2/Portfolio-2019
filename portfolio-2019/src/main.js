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
import { faSearch, faMap, faSearchPlus, faVoteYea } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faCodepen, faApple, faAndroid } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub, faLinkedin, faCodepen, faAndroid, faApple, faSearch, faMap, faSearchPlus, faVoteYea)

Vue.component('font-awesome-icon', FontAwesomeIcon)

//Setup Router
Vue.use(VueRouter)
const routes = [
  { path: '/', component: Home },
  { path: '/msuapp', component: MsuApp }
]
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
