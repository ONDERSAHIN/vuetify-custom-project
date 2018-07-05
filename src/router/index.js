import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/container/Full'),
      children: [
        {
          path: '/dashboard',
          component: () => import('@/components/HelloWorld'),
          meta: {
            title: 'Dashboard',
            breadcrumb: 'Dashboard',
          },
        },
        {
          path: '/definitions/job-info',
          component: () => import('@/pages/definitions/Definition'),
          redirect: '/definitions/job-info',
          children: [
            {
              path: '/definitions/job-info',
              component: () => import('@/pages/definitions/job-info/JobInfo'),
              name:'job-info',
              meta: {
                title: 'Job Info',
                breadcrumb: 'Definitions  /  Job Info',
              },
            },
          ],
        },
      ],
    },
  ],
})
