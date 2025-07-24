<template>
	<header>
		<nav class="navbar navbar-expand-sm navbar-dark-lg bg-primary">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">Navbar</a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto">
						<li class="nav-item">
							<!-- 라우터 링크를 사용해서 페이지 이동시 사용  -->
							<RouterLink active-class="active" class="nav-link" to="/"
								>Home</RouterLink
							>
						</li>
						<li class="nav-item">
							<RouterLink active-class="active" class="nav-link" to="/about"
								>About</RouterLink
							>
						</li>
						<li class="nav-item">
							<RouterLink active-class="active" class="nav-link" to="/posts"
								>게시글</RouterLink
							>
						</li>

						<!-- 라우터 사용을 안하면 리로딩이 됨 -->
						<!-- <li>
              <a class="nav-link" href="/">a Home</a>
            </li>
            <li>
              <a class="nav-link" href="/about">a About</a>
            </li> -->
					</ul>
					<form class="d-flex" role="search">
						<button class="btn btn-outline-light" type="button" @click="goPage">
							글쓰기
						</button>
					</form>
				</div>
			</div>
		</nav>
	</header>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goPage = () => {
	router.push({
		name: 'PostCreate',
	});
};
</script>
