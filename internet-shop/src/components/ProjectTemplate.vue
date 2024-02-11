<template>
    <div class="project__block">
        <img @click="doubleClick" class="project__block_img" :src="img" alt="Img">

        <svg v-show="isActive" class="project__block_star" xmlns="http://www.w3.org/2000/svg" width="36" height="35" fill="none">
            <g filter="url(#a)">
                <path fill="#FFA928"
                    d="M16.1 1.81c.6-1.838 3.2-1.838 3.8 0l1.898 5.799A2 2 0 0 0 23.7 8.987h6.11c1.942 0 2.745 2.486 1.171 3.622l-4.92 3.55a2 2 0 0 0-.73 2.243l1.885 5.76c.602 1.84-1.501 3.377-3.072 2.244l-4.973-3.588a2 2 0 0 0-2.34 0l-4.973 3.588c-1.57 1.133-3.674-.403-3.072-2.244l1.885-5.76a2 2 0 0 0-.73-2.244l-4.92-3.55c-1.574-1.135-.77-3.621 1.17-3.621h6.11a2 2 0 0 0 1.902-1.378l1.897-5.8Z" />
            </g>
            <defs>
                <filter id="a" width="35.627" height="34.362" x=".186" y=".431" color-interpolation-filters="sRGB"
                    filterUnits="userSpaceOnUse">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_993_156" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_993_156" result="shape" />
                </filter>
            </defs>
        </svg>
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

    },
    data() {
        return {
            isActive: false,
            click: 0,
        };
    },
    methods:{
        doubleClick(){
            this.click++;
            if(this.click === 2){
                this.isActive = !this.isActive;
                this.click = 0;
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>