import { createRouter, createWebHistory, type RouteLocationNormalized } from 'vue-router'
import HomePage from './home/HomePage.vue'
import AboutUsPage from './about/AboutUsPage.vue'
import SkillsPage from './skills/SkillsPage.vue'
import ServicesPage from './services/ServicesPage.vue'
import JobsPage from './jobs/JobsPage.vue'

const subServiceRouteBehaviour = (route:RouteLocationNormalized) => {
  const subServiceRouteSlugs: string[] = ['it-staffing', 'non-it-staffing', 'staffing-models']
  const routeSlug = route.params.slug as string | undefined;
  const subServiceRouteFlag = subServiceRouteSlugs.includes(routeSlug as string);
  if(subServiceRouteFlag && routeSlug){
     return {top:0};
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomePage },
    { path: '/about-us', component: AboutUsPage },
    { path: '/skills', component: SkillsPage },
    { path: '/services/:slug', component: ServicesPage },
    {
      path: '/services',
      redirect: '/services/it-staffing',
    },
    { path: '/jobs', component: JobsPage },
  ],
  scrollBehavior(to, from, savedPosition) {
   return subServiceRouteBehaviour(to);
  },
})

export default router
