<template>
    <img class="big" :src="big" alt="big">
    <div>
        <img v-for="(img, index) in pictures" :key="index" @click="select(img)" :src="img" alt="min">
    </div>
</template>

<script>
import img4 from "@/assets/4.jpg"
export default {
    data() {
        return {
            big: require("@/assets/1.jpg"),
            pictures: {
                img1: require("@/assets/1.jpg"),
                img2: require("@/assets/2.jpg"),
                img3: require("@/assets/3.jpg"),
                img4: img4
            },
        };

    },
    methods: {
        select(img) {
            this.big = img;
        }
    }
}

</script>

<style lang="scss" scoped>
div {
    display: flex;
    gap: 10px;

    img {
        width: 250px;
    }
}

.big{
    width: 500px;
}
</style>