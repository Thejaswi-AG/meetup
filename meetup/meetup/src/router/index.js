import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Meetups from '../components/Meetup/Meetups'
import CreateMeetup from '../components/Meetup/CreateMeetup'
import Profile from '../components/User/Profile'
import Signin from '../components/User/Signin'
import Signup from '../components/User/Signup'
import Meetup from '../components/Meetup/Meetup'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/meetups',
    name: 'Meetups',
    component: Meetups
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/meetups/new',
    name: 'CreateMeetup',
    component: CreateMeetup
  },
  {
    path: '/meetup/id',
    name: 'Meetup',
    component: Meetup
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
