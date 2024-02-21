<template>
    <div>
        <Start />
        <section class="container notfound">
            <div class="notfound__left">
                <h1 class="notfound__left_title">404</h1>
                <h2 class="notfound__left_page">We are sorry, but the page you requested was not found</h2>
                <router-link :to="url">
                    <button class="main__desc_btn">
                    <p class="main__desc_btn-text">Back To Home</p>
                    <svg class="main__desc_btn-img" xmlns="http://www.w3.org/2000/svg" width="18" height="17"
                        viewBox="0 0 18 17" fill="none">
                        <path d="M1 8.43542L14.7232 8.29857M9.618181.91138L16.1412 8.43436L9.48677 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                </button>
                </router-link>
            </div>
            <div>
                <img class="notfound__img" src="@/assets/img/404.jpg" alt="404">
            </div>
        </section>

    </div>
</template>

<script>
import Start from './Start.vue';

export default {
    components: { Start },
    data() {
        return {
            url: '/'
        }
    },
}
</script>

<style lang="scss" scoped></style>