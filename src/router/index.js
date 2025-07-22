// npm i vue-router 설치 > router 폴더를 생성해서 설정 > main.js에 해당 파일을 import 한뒤 작업을 설정한다.
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';

const routes = [
  {
    path: '/',
    name: 'Home Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about about',
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
