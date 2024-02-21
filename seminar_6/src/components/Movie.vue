<template>
    <div>
        <h2>{{ movie.title }}</h2>
        <h2>{{ movie.author }}</h2>
        <h2>{{ movie.year }}</h2>
        <button @click="toggle">{{ isShow ? "Скрыть детали" : "Показать детали" }}</button>
        <p v-if="isShow">{{ movie.time }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShow: false,
        };
    },
    props:{
        movie: Object,
    },

    methods: {
        toggle(){
            this.isShow = !this.isShow;
        }
    },
};
</script>

<style lang="scss" scoped>

</style>