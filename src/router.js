import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home/home'

const dashboard =()=> import('./views/home/dashboard')
const showCharts =()=> import('./views/showCharts/showCharts')
const list =()=> import('./views/list/list')



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
          path: '/',
          name: 'home',
          component: home,
          children:[
              {
                  path: '/dashboard',
                  name: 'dashboard',
                  component: dashboard
              },
              {
                  path: '/showCharts',
                  name: 'showCharts',
                  component: showCharts
              },
              {
                  path:'/list',
                  name:'list',
                  component:list
              }
          ]

      },
  ]
})
