import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import commen from './commen/commen'
import './assets/icon/iconfont.css'
import echarts from 'echarts'

// import JTopo from 'public/jTopo-0.4.8-min'
// Vue.use(JTopo)

Vue.use(ElementUI)


Vue.config.productionTip = false
Vue.prototype.$echarts = echarts


Vue.prototype.$commen = commen


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
