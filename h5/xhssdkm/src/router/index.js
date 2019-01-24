/* eslint-disable */ 
import Vue from 'vue'
import Router from 'vue-router'
import Loading from '@/components/Loading'
import Cover from '@/components/Cover'
import Info from '@/components/Info'
import Book from '@/components/Book'
import VideoPage from '@/components/VideoPage'
import TeamPage from '@/components/TeamPage'

Vue.use(Router)

var router= new Router({
  //mode: 'history',
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
      path: '/info/:index?',
      name: 'Info',
      component: Info
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/videopage',
      name: 'VideoPage',
      component: VideoPage
    },
    {
      path: '/teampage',
      name: 'TeamPage',
      component: TeamPage
    }
  ]
})

export default router;