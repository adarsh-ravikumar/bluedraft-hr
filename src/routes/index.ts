import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './home/HomePage.vue'
import AboutUsPage from './about/AboutUsPage.vue'
import SkillsPage from './skills/SkillsPage.vue'
import ServicesPage from './services/ServicesPage.vue'
import JobsPage from './jobs/JobsPage.vue'

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
