<template>
    <div>
        <ProjectTemplate v-for="(item, index) in bedRoom" :key="index" :img="item.img" :title="item.title"/> 
    </div>
</template>

<script>
import ProjectTemplate from './ProjectTemplate.vue';

    export default {
    components: { ProjectTemplate },
    data() {
        return {
            bedRoom: [
                {
                    img: require('@/assets/img/projectBedroom (1).png'),
                    title: 'Minimal Bedroom'
                },
                {
                    img: require('@/assets/img/projectBedroom (2).png'),
                    title: 'Classic Minimal Bedroom'
                },
                {
                    img: require('@/assets/img/projectBedroom (3).png'),
                    title: 'Minimal Bedroom table'
                },
                {
                    img: require('@/assets/img/projectBedroom (4).png'),
                    title: 'Modern Bedroom'
                },
                {
                    img: require('@/assets/img/projectBedroom (5).png'),
                    title: 'Minimal Bedroom'
                },
                {
                    img: require('@/assets/img/projectBedroom (6).png'),
                    title: 'Modern Bedroom'
                },
                {
                    img: require('@/assets/img/projectBedroom (7).png'),
                    title: 'System Table'
                },
                {
                    img: require('@/assets/img/projectBedroom (8).png'),
                    title: 'Modern Bedroom'
                },
            ],
        };
    },
}
</script>

<style lang="scss" scoped>

</style>