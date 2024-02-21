<template>
    <div>
        <h1>Add Movie</h1>
        <input v-model="title" type="text" placeholder="add title"> <br>
        <input v-model="author" type="text" placeholder="add author"> <br>
        <input v-model="year" type="number" placeholder="add year"> <br>
        <input v-model="time" type="number" placeholder="add time"> <br>
        <button @click="addMovie">Add Movie</button>
    </div>
</template>

<script>
import { v4 as uuidv4} from 'uuid'
export default {
    emits:['addMovie'],
    data() {
        return {
            title: "",
            author: "",
            year: null,
            time: null,
        };
    },

    methods: {
        addMovie(){
            const newMovie = {
                id: uuidv4(),
                title: this.title,
                author: this.author,
                year: this.year,
                time: this.time,
            };
            this.$emit('add-movie', newMovie);
            this.title = '';
            this.author = '';
            this.year = null;
            this.time = null;
        }
    },
};
</script>

<style lang="scss" scoped>

</style>