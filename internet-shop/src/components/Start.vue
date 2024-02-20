<template>
    <header>
        <div class="container header">
            <div class="header__logo">
                <img class="header__logo_img" src="@/assets/img/Logo.png" alt="Logo">
                <h3 class="header__logo_text">Interno</h3>
            </div>
            <div class="header__nav">
                <router-link v-for="(link) in links" :key="link" :to="link.url" class="header__nav_text"> {{ link.title }} </router-link>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    id: 1,
                    title: 'Home',
                    url: '/',
                },
                {
                    id: 2,
                    title: 'Project',
                    url: '/project',
                },
                {
                    id: 1,
                    title: 'Blog',
                    url: '/blog',
                }
            ]
        };
    },
};
</script>