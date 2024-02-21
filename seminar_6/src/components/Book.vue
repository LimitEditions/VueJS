<template>
    <div>
        <h2>{{ book.title }}</h2>
        <h2>{{ book.author }}</h2>
        <h2>{{ book.year }}</h2>
        <button @click="toggle">{{ isShow ? "Скрыть детали" : "Показать детали" }}</button>
        <p v-if="isShow">{{ book.pages }}</p>
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
        book: Object,
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