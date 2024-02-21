<template>
<BookList />
<MovieList />
</template>

<script>
import BookList from './components/BookList.vue';
import MovieList from './components/MovieList.vue';



export default {
  name: 'App',
  components: {
    BookList,
    MovieList
}
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
