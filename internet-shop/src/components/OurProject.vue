<template>
    <div>
        <Start />
        <BannerMain :imageSrc="img" title="Our Project" subtitle="Home/Project"/>
        <section>
            <div class="nav">
                <button class="nav__btn" v-for="button in buttons" :key="button" :data-name="button"
                    @click="click(button)">{{ button }}
                </button>
            </div>
        </section>
        <section>
            <div class="container project">
                <BedRoom v-show="activeComponent === 'Bed Room'" />
                <BathRoom v-show="activeComponent === 'Bathroom'" />
                <Kitchen v-show="activeComponent === 'Kitchen'" />
                <LivingArea v-show="activeComponent === 'Living Area'" />
            </div>
            <div class="container page">
                <a class="page__link" href="#">01</a>
                <a class="page__link" href="#">02</a>
                <a class="page__link" href="#">03</a>
                <a class="page__link" href="#"><img class="cards__item_btn-vector" src="@/assets/img/Vector.png"
                        alt="vector"></a>
            </div>
        </section>
        <End />
    </div>
</template>

<script>
import BannerMain from './BannerMain.vue';
import BathRoom from './BathRoom.vue';
import BedRoom from './BedRoom.vue';
import End from './End.vue';
import Kitchen from './Kitchen.vue';
import LivingArea from './Living Area.vue';
import Start from './Start.vue';

export default {
    components: { Start, End, BannerMain, BedRoom, BathRoom, Kitchen, LivingArea },

    data() {
        return {
            img: require("@/assets/img/BannerProject.jpeg"),
            buttons: ['Bathroom', 'Bed Room', 'Kitchen', 'Living Area'],
            activeComponent: null,
        };
    },
    methods: {
        click(componentName) {
            this.activeComponent = componentName;
            const buttons = document.querySelectorAll('.nav__btn');
            buttons.forEach(button => {
                button.classList.remove('nav__btn_active');
            });
            const currentButton = document.querySelector(`.nav__btn[data-name="${componentName}"]`);
            if (currentButton) {
                currentButton.classList.add('nav__btn_active');
            }
        },

    }

}
</script>

<style lang="scss"></style>