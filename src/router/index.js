// npm i vue-router 설치 > router 폴더를 생성해서 설정 > main.js에 해당 파일을 import 한뒤 작업을 설정한다.
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import PostListView from '@/views/posts/PostListView.vue';

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
	{
		path: '/posts',
		name: 'PostList',
		component: PostListView,
	},
	{
		path: '/posts/create',
		name: 'PostCreate',
		component: PostCreateView,
	},
	{
		path: '/posts/:id',
		name: 'PostDeatil',
		component: PostDetailView,
	},
	{
		path: '/posts/:id/edit',
		name: 'PostEdit',
		component: PostEditView,
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
