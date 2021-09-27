import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => {return import('../views/buildingsite.vue')}
  },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

/*
router.beforeEach((to, from, next) => {
  const adminPages = ['/','/Tickets'];
  const adminRequired = !adminPages.includes(to.path)
  const isAdmin = localStorage.getItem('isAdmin')

  if(adminRequired && isAdmin != 1){
    return next('/')
  }
  next();
})
*/
export default router
