import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Grade from 'grade-js'

Vue.use(ElementUI)
Vue.config.productionTip = false

window.Grade = Grade

new Vue({
  render: h => h(App),
}).$mount('#app')
