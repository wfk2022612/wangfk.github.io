/* eslint-disable */ 
import Vue from 'vue'
import Router from 'vue-router'
import Loading from '@/components/Loading'
import Main from '@/components/Main'
import Cover from '@/components/Cover'

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
    ,
    {
      path: '/cover',
      name: 'Cover',
      component: Cover
    }
  ]
})
