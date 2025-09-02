import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './HomePage.vue'
import AboutUsPage from './AboutUsPage.vue'
import SkillsPage from './SkillsPage.vue'
import ServicesPage from './ServicesPage.vue'
import JobsPage from './JobsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomePage },
    { path: '/about-us', component: AboutUsPage },
    { path: '/skills', component: SkillsPage },
    { path: '/services', component: ServicesPage },
    { path: '/jobs', component: JobsPage },

  ],
})

export default router
