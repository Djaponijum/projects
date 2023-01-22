import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import jquery from 'jquery'
import Popper from 'popper.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@vue/compat'

window.$ = window.jQuery = jquery
window.Popper = Popper

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
  