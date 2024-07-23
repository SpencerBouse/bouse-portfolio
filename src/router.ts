import { createRouter, createMemoryHistory } from 'vue-router'

import AboutView from '@components/views/AboutView.vue'
import SkillsView from '@components/views/SkillsView.vue'
import ProjectsView from '@components/views/ProjectsView.vue'

import { resetColors } from '@services/helpers'


const routes = [
  { path: '/', params: {name:'redirect'}, redirect: '/about' },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/skills', name: 'skills', component: SkillsView },
  { path: '/projects', name: 'projects', component: ProjectsView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

router.beforeEach((to,from) => {
  resetColors()
  to.params.from = from.path
})
export default router