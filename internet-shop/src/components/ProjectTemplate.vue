<template>
    <div class="project__block">
        <img class="project__block_img" :src="img" alt="Img" >
        <div class="cards__item_desc">
            <div>
                <p class="cards__item_text">{{ title }}</p>
                <p class="cards__item_sort">Decor / Artchitecture</p>
            </div>
            <button class="cards__item_btn"><img class="cards__item_btn-vector" src="@/assets/img/Vector.png" alt="vector">
            </button>
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

    }
}
</script>

<style lang="scss" scoped></style>