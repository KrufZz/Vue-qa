import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Appindex from "../components/home/Appindex";
import Register from "../components/home/Register";
import Test from "../components/home/Test";
import Order from "../components/home/Order";
import OrderList from "../components/home/OrderList";
import Index from "../components/home/Index";
import Photo from "../components/common/PhotoCard"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  },
  {
    path:'/index',
    name:'Appindex',
    component:Appindex
  },{
  path:'/register',
    name:'Register',
    component:Register
  },{
    path:'/test',
    name:'Test',
    component:Test
  },{
    path:'/order',
    name:'Order',
    component:Order
  },{
   path:'/oubao',
    name:'OrderList',
    component:OrderList
  },{
   path:'/in',
    name:"Index",
    component:Index
  },{
   path:"/photo",
    name:"Photo",
    component:Photo
   }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
