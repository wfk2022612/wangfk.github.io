/* eslint-disable */ 
import Vue from 'vue'
import Router from 'vue-router'
import Loading from '@/components/Loading'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Loading',
      component: Loading
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})
