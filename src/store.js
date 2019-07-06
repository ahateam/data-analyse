import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      navDefaultActive:'0',

      /** 图表配置*/
      chart:{
        nowNode:{}
      }
  },
  mutations: {

  },
  actions: {

  }
})
