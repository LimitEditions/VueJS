<template>
    <div class="container articles">
      <div class="articles__headdig">
        <h2 class="articles__headdig_title">Articles & News</h2>
        <p class="articles__headdig_text">It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points of using.</p>
      </div>
      <div class="articles__cards">
        <div v-for="item in cards.slice(0, 3)" :key="item.id" class="articles__cards_item">
          <div class="articles__cards_item-design">
            <img class="articles__cards_img" :src="item.img" alt="News">
            <h3 class="articles__cards_text">{{ item.name }}</h3>
          </div>
          <div class="articles__cards_desc">
            <h2 class="articles__cards_title">{{ item.title }}</h2>
            <div class="articles__cards_goNew">
              <time class="articles__cards_time" datetime="2022-12-26">{{ item.data }}</time>
              <button class="cards__item_btn"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70"
                  viewBox="0 0 70 70" fill="none">
                  <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                  <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>     
</template>

<script>
export default {
    data() {
        return {
            cards:[
                {
                    id: 1,
                    name: 'Kitchan Design',
                    img: require('@/assets/img/News1.png'),
                    title: 'Let’s Get Solution For Building Construction Work',
                    data: '26 December,2022',
                },
                {
                    id: 2,
                    name: 'Living Design',
                    img: require('@/assets/img/News2.png'),
                    title: 'Low Cost Latest Invented Interior Designing Ideas',
                    data: '22 December,2022',
                },
                {
                    id: 3,
                    name: 'Interior Design',
                    img: require('@/assets/img/News3.png'),
                    title: 'Best For Any Office & Business Interior Solution',
                    data: '25 December,2022',
                },
                {
                    id: 4,
                    name: 'Kitchan Design',
                    img: require('@/assets/img/News4.png'),
                    title: 'Let’s Get Solution For Building Construction Work',
                    data: '26 December,2022',
                },
                {
                    id: 5,
                    name: 'Living Design',
                    img: require('@/assets/img/News5.png'),
                    title: 'Low Cost Latest Invented Interior Designing Ideas',
                    data: '22 December,2022',
                },
                {
                    id: 6,
                    name: 'Interior Design',
                    img: require('@/assets/img/News6.png'),
                    title: 'Best For Any Office & Business Interior Solution',
                    data: '25 December,2022',
                },
            ]

        }
    },
}
</script>