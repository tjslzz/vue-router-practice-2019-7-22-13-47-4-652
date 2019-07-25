import VueRouter from 'vue-router'
import index from '../components/index'
import Main from '../components/Main'
import Home from '../components/Home'
import MyPage from '../components/MyPage'
import Vue from 'vue'
Vue.use(VueRouter)


const routes = [
  {
    path: '/home', component: Home,
    children: [
      { 
        path: '/home/index', component: index ,name:'index'
      },
      {
        path: '/home/mypage',
        component: MyPage ,name:'mypage'
      },
      
    ]
  },
 
  { path: '/', name: 'main', component: Main },
],
  router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })
export default router