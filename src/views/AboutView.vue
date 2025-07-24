<template>
	<div>
		<h2>About</h2>
		<p>about 경로: {{ $route.path }}</p>
		<p>about 이름: {{ $route.name }}</p>
		<button @click="goHomePage">Home으로 이동</button>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const goHomePage = () => {
	router.push('/');
};
</script>

<style lang="scss" scoped></style>
