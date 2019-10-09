import Vue from 'vue'
import Vuex from 'vuex'
import index from '@/store/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    index
  }
})
