import Vuex from "vuex"
import Vue from "vue"
import actions from "./actions"
import mutations from "./mutations"
import VueRouter from 'vue-router'
Vue.use(VueRouter)
Vue.use(Vuex)
const store = new Vuex.Store({
  actions, 
  mutations,
  state: {
        itemsAll:[],
        itemsShow:[],
        condition:1,
    },
    
  })
  export default store;