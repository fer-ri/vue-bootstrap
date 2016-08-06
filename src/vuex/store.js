import Vue from 'vue'
import Vuex from 'vuex'
import navbar from './modules/navbar'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    navbar
  },
  strict: debug
})
