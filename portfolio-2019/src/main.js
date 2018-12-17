import Vue from 'vue'
import App from './App.vue'

// Import Styles
import './assets/styles/normalize.css'

// Import Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin, faCodepen } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub, faLinkedin, faCodepen)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
