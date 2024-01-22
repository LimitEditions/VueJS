<template>
    <StartHeadding />
    <main>
        <img class="details-img" src="@/assets/img/detail_main.jpg" alt="detail_main">
    </main>
    <section>
        <div class="container details-tag">
            <ArticleSort />
        </div>
    </section>
    <EndFooter />
</template>
  
<script>
import StartHeadding from './components/Start.vue';
import EndFooter from './components/End.vue';
import ArticleSort from './components/ArticleSort.vue';


export default {
    name: 'App',
    components: {
        StartHeadding,
        EndFooter,
        ArticleSort
    }
}
</script>

