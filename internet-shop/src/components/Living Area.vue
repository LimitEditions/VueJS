<template>
    <div>
        <ProjectTemplate v-for="(item, index) in livingArea" :key="index" :img="item.img" :title="item.title"/> 
    </div>
</template>

<script>
import ProjectTemplate from './ProjectTemplate.vue';

    export default {
    components: { ProjectTemplate },
    data() {
        return {
            livingArea: [
                {
                    img: require('@/assets/img/projectLivingArea1.jpg'),
                    title: 'Minimal LivingArea'
                },
                {
                    img: require('@/assets/img/projectLivingArea2.jpg'),
                    title: 'Classic Minimal LivingArea'
                },
                {
                    img: require('@/assets/img/projectLivingArea3.jpg'),
                    title: 'Minimal LivingArea'
                },
                {
                    img: require('@/assets/img/projectLivingArea4.jpg'),
                    title: 'Modern LivingArea'
                },
                {
                    img: require('@/assets/img/projectLivingArea5.jpg'),
                    title: 'Minimal LivingArea'
                },
                {
                    img: require('@/assets/img/projectLivingArea6.jpg'),
                    title: 'Modern LivingArea'
                },
            ],
        };
    },
}
</script>

<style lang="scss" scoped>

</style>