<template>
    <Start />
    <main>
        <img class="details-img" src="@/assets/img/detail_main.jpg" alt="detail_main">
    </main>
    <section>
        <div class="container details-tag">
            <ArticleSort />
        </div>
    </section>
    <End />
</template>
  
<script>
import Start from './Start.vue';
import End from './End.vue';
import ArticleSort from './ArticleSort.vue';


export default {
    name: 'App',
    components: {
        Start,
        End,
        ArticleSort
    }
}
</script>

