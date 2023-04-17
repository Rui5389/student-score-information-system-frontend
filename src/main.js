import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import plugins from "@/plugins/plugins";
import store from '../views/store'

Vue.config.productionTip = false
Vue.use(ElementUI, {size:'small'})
Vue.use(plugins)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
