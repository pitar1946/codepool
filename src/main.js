import Vue from 'vue'
import App from './components/App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core'
//import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram , faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './css/styles.css'

library.add(faFacebook, faInstagram, faTwitter, faYoutube)

Vue.component('font-awesome-icon', FontAwesomeIcon)



new Vue({
  el: '#app',
  render: h => h(App)
})
