<template>
    <Start />
    <BannerMain :imageSrc="img" title="Articles & News" subtitle="Home/Blog" />
    <section>
        <div class="container post">
            <h2 class="post__title">Latest Post</h2>
            <div class="post__articles">
                <div>
                    <img class="post__articles_img" src="@/assets/img/LatestPost.png" alt="LatestPost">
                </div>
                <div class="post__articles_desc">
                    <div class="post__articles_desc-card">
                        <h3 class="post__articles_headding">Low Cost Latest Invented Interior Designing Ideas</h3>
                        <p class="post__articles_text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p>
                        <p class="post__articles_text">Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
                    </div>
                    <div class="articles__cards_goNew">
                        <time class="articles__cards_time" datetime="2022-12-26">26 December,2022</time>
                        <router-link :to="url"><button class="cards__item_btn"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70"
                                viewBox="0 0 70 70" fill="none">
                                <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                                <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </button>
                    </router-link>
                    </div>
                </div>
            </div>
        </div>

    </section>
    <MainCards />
    <section>
        <div class="container page">
            <a class="page__link" href="#">01</a>
            <a class="page__link" href="#">02</a>
            <a class="page__link" href="#">03</a>
            <a class="page__link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70"
                    viewBox="0 0 70 70" fill="none">
                    <circle cx="35" cy="35" r="35" fill="none"></circle>
                    <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"></path>
                </svg></a>
        </div>
    </section>
    <End />
</template>
  
<script>
import Start from './Start.vue';
import End from './End.vue';
import MainCards from './MainCards.vue';
import BannerMain from './BannerMain.vue';

export default {
    name: 'App',
    components: {
        Start,
        End,
        MainCards,
        BannerMain
    },
    data() {
        return {
            img: require('@/assets/img/banerBlog.jpg'),
            url: '/blog-details',
        };
    },
}
</script>
  
<style></style>
  