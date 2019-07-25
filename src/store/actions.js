import axios from 'axios'
import Vue from "vue"
Vue.config.productionTip = false
Vue.prototype.$ajax = axios
const actions={

// Make a request for a user with a given ID
add({commit},item){
  axios.post('http://localhost:3001/todos', item)
  .then(function (response) {
    commit('add',item);
  
  })
  .catch(function (error) {
    console.log(error);
  });  
},
// Make a request for a user with a given ID
getItem({commit}){
    axios.get('http://localhost:3001/todos')
     .then(function(response) { 
         
    console.log(response.data);
    console.log(response.status);
    commit('getItems',response.data);
  });
  },
update({commit},item){
    axios.put('http://localhost:3001/todos/'+item.id, item)
    .then(function (response) {
      commit('update',item);
      console.log(response);
      
    })
    .catch(function (error) {
      console.log(error);
    });  
  },
 delete({dispatch,commit},itemId){
    axios.delete('http://localhost:3001/todos/'+itemId)
    .then(function (response) {
      commit('delete',itemId);
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });  
  },
}
export default actions