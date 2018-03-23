import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/Login'
import Reginster from '@/Reginster'
import Index from '@/Index'
import Video from '@/Video'
import Guangbo from '@/Guangbo'
import Xiaozu from '@/Xiaozu'
import My from '@/My'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/reginster',
      name: 'Reginster',
      component: Reginster
    },{
      path: '/Index',
      name: 'Index',
      component: Index
    },{
      path: '/Video',
      name: 'Video',
      component: Video
    },{
      path: '/Guangbo',
      name: 'Guangbo',
      component: Guangbo
    },{
      path: '/Xiaozu',
      name: 'Xiaozu',
      component: Xiaozu
    },{
      path: '/My',
      name: 'My',
      component: My
    }
  ]
})
