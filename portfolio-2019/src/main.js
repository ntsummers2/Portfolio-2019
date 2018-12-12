import Vue from 'vue'
import App from './App.vue'

// Import Styles
import './assets/styles/normalize.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
