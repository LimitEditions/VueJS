<template>
    <nav>
        <div class="blog-nav">
            <img class="blog-nav__img" :src="imageSrc" alt="banerBlog">
            <div class="blog-nav__title">
                <h2 class="blog-nav__title_headding">{{title}}</h2>
                <div class="blog-nav__title_breadCrumbs">
                    <a class="blog-nav__title_breadCrumbs-link" href="#">Home</a>
                    <a class="blog-nav__title_breadCrumbs-link" href="#">Blog</a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    props:{
        imageSrc:{
            type: String,
            required: true,
        },
        title:{
            type: String,
        }
    }, 
}
</script>

<style lang="scss" scoped></style>