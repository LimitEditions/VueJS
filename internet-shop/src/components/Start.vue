<template>
    <header>
        <div class="container header">
            <div class="header__logo">
                <img class="header__logo_img" src="@/assets/img/Logo.png" alt="Logo">
                <h3 class="header__logo_text">Interno</h3>
            </div>
            <div class="header__nav">
                <a href="@/components/App.vue" class="header__nav_text">Home</a>
                <a href="#" class="header__nav_text">Project</a>
                <a href="@/components/Blog.vue" class="header__nav_text">Blog</a>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "StartHeadding",
};
</script>