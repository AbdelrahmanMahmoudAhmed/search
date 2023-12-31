import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutViewVue from '../views/AboutView.vue'
import TestingView from "../views/TestingView.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutViewVue
    },
    {
      path: '/testing',
      name: 'testing',
      component: TestingView
    }
  ]
})

export default router




// router.beforeEach((to, from, next) => {
//   const global = useGlobalStore();
  
//     if (to.meta.requiresAuth  &&  !global.isLogedIn ) next('/login')
//     else if (to.meta.authPage &&  global.isLogedIn) next('/')
//     else next();
//   })
  
