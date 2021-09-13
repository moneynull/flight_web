import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import adminPage from "../components/adminPage";
import companyPage from "../components/companyPage";
import userPage from "../components/userPage";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/adminPage',
      name: 'adminPage',
      component: adminPage
    },{
      path: '/companyPage',
      name: 'companyPage',
      component: companyPage
    },{
      path: '/userPage',
      name: 'userPage',
      component: userPage
    }
  ]
})
