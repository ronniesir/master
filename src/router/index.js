import Vue from 'vue';
import Router from 'vue-router'
Vue.use(Router);
export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('@/views/layout.vue'),
      children: [
        {
          path: '/project/:projectId/report/projectcount',
          name: 'projectcount',
          component: () => import('@/views/report/index.vue'),
        },
        {
          path: '/subApp1/form',
          name: 'subApp1',
          component: () => import('@/views/app1/form.vue'),
        },
        {
          path: '/sub2',
          name: 'subApp2',
          component: () => import('@/views/app2/edit.vue'),
        },
        {
          path: '/mulApp',
          name: 'mulApp',
          component: () => import('@/views/multiple/detail.vue'),
        }
      ]
    },
  ]
});