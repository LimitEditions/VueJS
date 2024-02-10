<template>
    <div>
        <ProjectTemplate v-for="(item, index) in bathRoom" :key="index" :img="item.img" :title="item.title"/> 
    </div>
</template>

<script>
import ProjectTemplate from './ProjectTemplate.vue';

    export default {
    components: { ProjectTemplate },
    data() {
        return {
            bathRoom: [
                {
                    img: require('@/assets/img/projectBathroom1.jpg'),
                    title: 'Minimal Bathroom'
                },
                {
                    img: require('@/assets/img/projectBathroom2.jpg'),
                    title: 'Classic Minimal Bathroom'
                },
                {
                    img: require('@/assets/img/projectBathroom3.jpg'),
                    title: 'Minimal Bathroom'
                },
                {
                    img: require('@/assets/img/projectBathroom4.jpg'),
                    title: 'Modern Bathroom'
                },
                {
                    img: require('@/assets/img/projectBathroom5.jpg'),
                    title: 'Minimal Bathroom'
                },
                {
                    img: require('@/assets/img/projectBathroom6.jpg'),
                    title: 'Modern Bathroom'
                },
                {
                    img: require('@/assets/img/projectBathroom7.jpg'),
                    title: 'Bathroom'
                },
            ],
        };
    },
}
</script>

<style lang="scss" scoped>

</style>