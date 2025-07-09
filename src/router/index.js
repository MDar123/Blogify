import { createMemoryHistory, createRouter } from 'vue-router'

import BlogDetailsPage from "@/views/BlogDetailsPage.vue"
import DashboardPage from "@/views/DashboardPage.vue"
import HomePage from "@/views/HomePage.vue"
import Login from "@/views/Login.vue"
import SignUp from "@/views/SignUp.vue"

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: Login },
  { path: '/register', component: SignUp },
  { path: '/dashboard', component: DashboardPage },
  { path: '/blog-detail', component: BlogDetailsPage }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router