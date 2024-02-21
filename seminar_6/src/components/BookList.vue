<template>
    <div>
        <Book v-for="book in books" :key="book.id" :book="book" />
    </div>
</template>

<script>
import Book from './Book.vue';

    export default {
    data() {
        return {
            books: [
                {
                    id: 1,
                    title: 'book1',
                    author: 'author1',
                    year: 2023,
                    pages: 256,
                },
                {
                    id: 2,
                    title: 'book2',
                    author: 'author2',
                    year: 2022,
                    pages: 123,
                },
                {
                    id: 3,
                    title: 'book3',
                    author: 'author3',
                    year: 2024,
                    pages: 167,
                }
            ],
        };
    },
    components: { Book }
}
</script>

<style lang="scss" scoped>

</style>