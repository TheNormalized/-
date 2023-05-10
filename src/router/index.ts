import { createRouter } from 'vue-router';
import { createWebHistory } from 'vue-router';

// 组件
import Login from '../views/components/userLogin.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      component: Login,
    },
  ],
});

export default router;
