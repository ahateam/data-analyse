import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home/home'

const dashboard =()=> import('./views/home/dashboard');
const showCharts =()=> import('./views/showCharts/showCharts');
const list =()=> import('./views/list/list');

// list子路由
const addRelationship =()=> import('./views/list/addRelationship/addRelationship');
const delRelationship =()=> import('./views/list/delRelationship/delRelationship');
const editRelationship =()=> import('./views/list/editRelationship/editRelationship');
const calcColumn =()=> import('./views/list/calcColumn/calcColumn');
const measure =()=> import('./views/list/measure/measure');

//单独页面路由
const database =()=> import('./views/database/database')
const dataTable =()=> import('./views/dataTable/dataTable')

Vue.use(Router)

export default new Router({
  mode: 'hash',
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
                  component:list,
                  redirect:'/addRelationship',
                  children: [
                      {
                          path: '/addRelationship',
                          name: 'addRelationship',
                          component: addRelationship
                      },
                      {
                          path: '/delRelationship',
                          name: 'delRelationship',
                          component: delRelationship
                      },
                      {
                          path: '/editRelationship',
                          name: 'editRelationship',
                          component: editRelationship
                      },
                      {
                          path: '/calcColumn',
                          name: 'calcColumn',
                          component: calcColumn
                      },
                      {
                          path: '/measure',
                          name: 'measure',
                          component: measure
                      }
                  ]
              },
              {
                  path: '/database',
                  name: 'database',
                  component: database
              },
              {
                  path: '/dataTable',
                  name: 'dataTable',
                  component: dataTable
              },
          ]

      },
  ]
})
