import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', component: () => import('../views/IndexView.vue'), meta: { next: '/skills' } },
      { path: '/skills', component: () => import('../views/SkillsView.vue'), meta: { prev: '/' }  },
      { path: process.env.VUE_ENV == 'server' ? '/404' : '*', component: () => import('../views/NotFoundView.vue') }
    ]
  })
}
