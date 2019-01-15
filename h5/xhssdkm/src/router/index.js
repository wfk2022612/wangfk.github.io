/* eslint-disable */ 
import Vue from 'vue'
import Router from 'vue-router'
import Loading from '@/components/Loading'
import Cover from '@/components/Cover'
import Info from '@/components/Info'

Vue.use(Router)

export default new Router({
  
  routes: [
    {
      path: '/',
      name: 'Loading',
      component: Loading
    },
    {
      path: '/cover',
      name: 'Cover',
      component: Cover
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    }
  ]
})
