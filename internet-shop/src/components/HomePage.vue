<template>
    <div>
        <Start />
        <main>
            <div class="container main">
                <div class="main__desc">
                    <h1 class="main__desc_headding">Let Your Home Be Unique</h1>
                    <p class="main__desc_text">There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
                    <button class="main__desc_btn">
                        <p class="main__desc_btn-text">Get Started</p>
                        <svg class="main__desc_btn-img" xmlns="http://www.w3.org/2000/svg" width="18" height="17"
                            viewBox="0 0 18 17" fill="none"><path d="M1 8.43542L14.7232 8.29857M9.61818
                            1.91138L16.1412 8.43436L9.48677 15.0887" stroke="#CDA274" stroke-width="2"
                            stroke-linecap="square" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </main>
        <section>
            <div class="container subheadding">
                <h2 class="subheadding__title">Follow Our Projects</h2>
                <p class="subheadding__text">It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points. </p>
            </div>
        </section>
        <section>
            <div class="container cards">
                <div class="cards__item">
                    <img class="cards__item_img_top-right" src="@/assets/img/Card_1.png" alt="Card_1">
                    <div class="cards__item_desc">
                        <div>
                            <p class="cards__item_text">Modern Kitchan</p>
                            <p class="cards__item_sort">Decor /Artchitecture</p>
                        </div>
                        <router-link :to="url">
                            <button class="cards__item_btn"><img class="cards__item_btn-vector" src="@/assets/img/Vector.png" alt="vector"> </button>
                        </router-link>
                    </div>
                </div>
                <div class="cards__item">
                    <img class="cards__item_img_top-left" src="@/assets/img/Card_2.png" alt="Card_2">
                    <div class="cards__item_desc">
                        <div>
                            <p class="cards__item_text">Modern Kitchan</p>
                            <p class="cards__item_sort">Decor / Artchitecture</p>
                        </div>
                        <router-link :to="url">
                            <button class="cards__item_btn"><img class="cards__item_btn-vector" src="@/assets/img/Vector.png" alt="vector"> </button>
                        </router-link>
                    </div>
                </div>
                <div class="cards__item">
                    <img class="cards__item_img_bottom-right" src="@/assets/img/Card_3.png" alt="Card_3">
                    <div class="cards__item_desc">
                        <div>
                            <p class="cards__item_text">Modern Kitchan</p>
                            <p class="cards__item_sort">Decor / Artchitecture</p>
                        </div>
                        <router-link :to="url">
                            <button class="cards__item_btn"><img class="cards__item_btn-vector" src="@/assets/img/Vector.png" alt="vector"> </button>
                        </router-link>
                    </div>
                </div>
                <div class="cards__item">
                    <img class="cards__item_img_bottom-left" src="@/assets/img/Card_4.png" alt="Card_4">
                    <div class="cards__item_desc">
                        <div>
                            <p class="cards__item_text">Modern
                                Kitchan</p>
                            <p class="cards__item_sort">Decor
                                / Artchitecture</p>
                        </div>
                        <router-link :to="url">
                            <button class="cards__item_btn"><img class="cards__item_btn-vector" src="@/assets/img/Vector.png" alt="vector"> </button>
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="count">
                <div class="count__counter">
                    <div class="count__counter_block">
                        <h3 class="count__num">12</h3>
                        <p class="count__text">Years Of Experiance</p>
                    </div>
                    <div class="count__counter_block">
                        <h3 class="count__num">85</h3>
                        <p class="count__text">Success Project</p>
                    </div>
                    <div class="count__counter_block">
                        <h3 class="count__num">15</h3>
                        <p class="count__text">Active Project</p>
                    </div>
                    <div class="count__counter_block">
                        <h3 class="count__num">95</h3>
                        <p class="count__text">Happy Customers</p>
                    </div>
                </div>
            </div>
        </section>
        <MainCards />
        <End />
    </div>
</template>

<script>
import End from './End.vue';
import MainCards from './MainCards.vue';
import Start from './Start.vue';

export default {
    components: { Start, End, MainCards },
    data() {
        return {
            url: '/project',
        }
    },
}
</script>

<style lang="scss" scoped></style>