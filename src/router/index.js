import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesView from '../views/ServicesView.vue'
import SolutionsView from '../views/SolutionsView.vue'
import PartnersView from "@/views/PartnersView.vue";
import QuestionsView from "@/views/QuestionsView.vue";
import PoliticsView from "@/views/PoliticsView.vue";

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/services', name: 'services', component: ServicesView },
  { path: '/solutions', name: 'solutions', component: SolutionsView },
  { path: '/partners', name: 'partner', component: PartnersView },
  { path: '/questions', name: 'question', component: QuestionsView},
  { path: '/politics', name: 'politic', component: PoliticsView}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router