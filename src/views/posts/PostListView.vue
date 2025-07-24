<template>
	<div>
		<h2>게시글 목록</h2>
		<hr class="my-4" />
		<div class="row g-3">
			<div class="col-4" v-for="post in posts" :key="posts.id">
				<PostItem
					:title="post.title"
					:content="post.content"
					:created-at="post.createdAt"
					@click="goPage(post.id)"
				></PostItem>
			</div>
		</div>
	</div>
</template>

<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import { getPosts } from '@/api/posts';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const posts = ref([]);

const fetchPosts = () => {
	posts.value = getPosts();
};

const goPage = id => {
	// router.push(`/post/${id}`);
	// http://localhost:3000/posts/1?searchText=hello#world!
	router.push({
		name: 'PostDeatil',
		params: {
			id,
		},
		query: {
			searchText: 'hello',
		},
		hash: '#world!',
	});
};

fetchPosts();
</script>

<style lang="scss" scoped></style>
