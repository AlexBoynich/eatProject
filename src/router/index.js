import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GalleryView from '../views/GalleryView.vue'
import ProgramView from '../views/ProgramView.vue'
import ParticipantsView from '../views/ParticipantsView.vue'
import SponcorsView from '../views/SponcorsView.vue'
import ContactsView from '../views/ContactsView.vue'
import ErrorView from '../views/ErrorView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: GalleryView
  },
  {
    path: '/program',
    name: 'program',
    component: ProgramView
  },
  {
    path: '/participants',
    name: 'participants',
    component: ParticipantsView,
  },
  {
    path: '/sponcors',
    name: 'sponcors',
    component: SponcorsView,
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView,
  },
  {
    path: '*',
    name: 'error',
    component: ErrorView,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
