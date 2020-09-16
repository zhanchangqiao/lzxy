import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const router = new Router({
  routes: [
    //一个个对象
    {
      path: '/',
      name: '/',
      component: () => import("@/pages/index.vue"),
      redirect: '/home',
      children: [
        {
          name: 'home',
          path: '/home', component: () =>import("@/pages/home.vue")
        },
        {
          name: 'list',
          path: '/list', component: () =>import("@/pages/list.vue")
        },
        {
          name: 'detail',
          path: '/detail', component: () =>import("@/pages/detail.vue")
        }
      ]
    }
  ]
})

export default router