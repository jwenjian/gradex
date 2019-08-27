import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Grade from 'grade-js'
import VueI18n from 'vue-i18n'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faLanguage)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueI18n)
Vue.use(ElementUI)
Vue.config.productionTip = false

window.Grade = Grade

const messages = {
  "en": require('./locale/en_US.json'),
  "zh": require('./locale/zh_CN.json')
}

const i18n = new VueI18n({
  locale: "en",
  messages
})

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
