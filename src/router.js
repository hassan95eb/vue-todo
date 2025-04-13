import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Users from "./pages/Users.vue";
import Posts from "./pages/Posts.vue";
import User from "./pages/User.vue";
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/users", name: "Users", component: Users },
  { path: "/posts", name: "Posts", component: Posts },
  { path: "/users/:id", name: "User", component: User },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
