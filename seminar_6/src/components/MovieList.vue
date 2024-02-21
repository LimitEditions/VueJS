<template>
    <div>
        <Movie v-for="movie in movies" :key="movie.id" :movie="movie" />
        <AddMovie @add-movie="addFilm" />
    </div>
</template>

<script>
import AddMovie from './AddMovie.vue';
import Movie from './Movie.vue';

    export default {
    data() {
        return {
            movies: [
                {
                    id: 1,
                    title: 'movie1',
                    author: 'author1',
                    year: 2023,
                    time: 256,
                },
                {
                    id: 2,
                    title: 'movie2',
                    author: 'author2',
                    year: 2022,
                    time: 123,
                },
                {
                    id: 3,
                    title: 'movie3',
                    author: 'author3',
                    year: 2024,
                    time: 167,
                }
            ],
        };
    },

    methods:{
        addFilm(film) {
            this.movies.push(film);
        }
    },

    components: { Movie, AddMovie }
}
</script>

<style lang="scss" scoped>

</style>