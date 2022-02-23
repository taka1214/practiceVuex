import Vue from 'vue'
import VueRouter from 'vue-router'
import English from '../views/EnglishMain'
import Italian from '../views/ItalianMain'

Vue.use(VueRouter)

const routes = [
  {
    path: '/show/english',
    name: 'VocabList',
    component: English
  },
  {
    path: '*',
    redirect: '/show/english'
  },
  {
    path: '/show/italian',
    component: Italian
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
