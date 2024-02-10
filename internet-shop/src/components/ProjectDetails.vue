<template>
    <div>
        <Start />
        <main>
            <img src="@/assets/img/ProjectDetailsBanner.jpeg" alt="">
        </main>
        <section>
            <div class="projectDetails">
                <h1 class="projectDetails__title">{{ title }}</h1>
                <p class="projectDetails__desc">{{ description1 }}</p>
                <p class="projectDetails__desc">{{ description2 }}</p>
            </div>
        </section>
       <section class="container swiper__lupa swiper-zoom-container" :zoom="true">
        <div class="lupa">
            <img class="lupa-img" src="@/assets/img/lupa.png" alt="lupa">
        </div>
        <swiper 
        :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
        }" 
        :zoom="true" 
        :navigation="true" 
        :pagination="{clickable: true,}" 
        :modules="modules" class="mySwiper">
            <swiper-slide>
                <div class="swiper-zoom-container">
                    <img class="swiper-radius" src="@/assets/img/slide1.png" alt="Slide">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="swiper-zoom-container">
                    <img class="swiper-radius" src="@/assets/img/slide2.jpg" alt="Slide">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="swiper-zoom-container">
                    <img class="swiper-radius" src="@/assets/img/slide3.jpg" alt="Slide">
                </div>
            </swiper-slide>
        </swiper>
       </section>
        <End />
    </div>
</template>

<script>
import End from './End.vue';
import Start from './Start.vue';
import { mapState } from 'vuex';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Zoom, Navigation, Pagination } from 'swiper/modules';


export default {
    components: { Start, End,  Swiper, SwiperSlide },
    computed: {
        ...mapState(['title', 'description1', 'description2']),
    },
    setup() {
      return {
        modules: [Zoom, Navigation, Pagination],
      };
    },
}
</script>

<style lang="scss" scoped></style>