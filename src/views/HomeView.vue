<template>
  <div>
    <h2>Home</h2>
    <!-- route 인스턴스를 사용해서 현재 이 페이지서 사용되고 있는 라우트 정보에 접근할 수 있음 -->
    <p>home 경로: {{ $route.path }}</p>
    <p>home 이름: {{ $route.name }}</p>
    <!-- router 인스턴스를 사용해서 다른 페이지로 이동할 수 있음 -->
    <button @click="$router.push('/about')">about으로 이동 이동</button>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
console.log('route 정보: ', route.path);
</script>

<style lang="scss" scoped></style>
