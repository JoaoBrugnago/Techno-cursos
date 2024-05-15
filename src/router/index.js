import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContatoView from '../views/ContatoView.vue'
import CursosView from '../views/CursosView.vue'
import CursoView from '../views/CursoView.vue'
import AulaView from '../views/AulaView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homeView',
    component: HomeView
  },
  {
    path: '/contato',
    name: 'contatoView',
    component: ContatoView
  },
  {
    path: '/cursos',
    name: 'cursosView',
    component: CursosView
  }
  ,
  {
    path: '/cursos/:curso',
    name: 'cursoView',
    props: true,
    component: CursoView,
    children: [
      {
        path: ':aula',
        name: 'aulaView',
        props: true,
        component: AulaView,
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
