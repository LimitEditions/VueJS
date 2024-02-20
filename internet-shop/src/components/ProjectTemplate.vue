<template>
    <div class="project__block">
        <img @click="doubleClick" class="project__block_img" :src="img" alt="Img">
        <img v-show="isActive" class="project__block_star" src="@/assets/img/Star.svg" alt="star">
        <div class="cards__item_desc">
            <div>
                <p class="cards__item_text">{{ title }}</p>
                <p class="cards__item_sort">Decor / Artchitecture</p>
            </div>
            <router-link :to="url">
                <button class="cards__item_btn"><img class="cards__item_btn-vector" src="@/assets/img/Vector.png" alt="vector">
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        img: {
            type: String,
        },
        title: {
            type: String,
        }

    },
    data() {
        return {
            isActive: false,
            click: 0,
            url: '/project-details'
        };
    },
    methods: {
        doubleClick() {
            this.click++;
            if (this.click === 2) {
                this.isActive = !this.isActive;
                this.click = 0;
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>