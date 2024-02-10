<template>
    <div>
        <ProjectTemplate v-for="(item, index) in kitchen" :key="index" :img="item.img" :title="item.title"/> 
    </div>
</template>

<script>
import ProjectTemplate from './ProjectTemplate.vue';

    export default {
    components: { ProjectTemplate },
    data() {
        return {
            kitchen: [
                {
                    img: require('@/assets/img/projectKitchen1.jpg'),
                    title: 'Minimal Kitchen'
                },
                {
                    img: require('@/assets/img/projectKitchen2.jpg'),
                    title: 'Classic Minimal Kitchen'
                },
                {
                    img: require('@/assets/img/projectKitchen3.jpg'),
                    title: 'Minimal Kitchen table'
                },
                {
                    img: require('@/assets/img/projectKitchen4.jpeg'),
                    title: 'Modern Kitchen'
                },
                {
                    img: require('@/assets/img/projectKitchen5.jpg'),
                    title: 'Minimal Kitchen'
                },
                {
                    img: require('@/assets/img/projectKitchen6.jpg'),
                    title: 'Modern Kitchen'
                },
            ],
        };
    },
}
</script>

<style lang="scss" scoped>

</style>