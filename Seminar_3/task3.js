const Task = {
  data() {
    return {
      goods: [
        {
          id: 1,
          title: "ELLERY X M'O CAPSULE",
          text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
          price: '10',
          img: 'img/cards/card1.png',
        },
        {
          id: 2,
          title: "ELLERY X M'O CAPSULE",
          text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
          price: '20',
          img: 'img/cards/card2.png',
        },
        {
          id: 3,
          title: "ELLERY X M'O CAPSULE",
          text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
          price: '30',
          img: 'img/cards/card3.png',
        },
        {
          id: 4,
          title: "ELLERY X M'O CAPSULE",
          text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
          price: '40',
          img: 'img/cards/card4.png',
        },
        {
          id: 5,
          title: "ELLERY X M'O CAPSULE",
          text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
          price: '50',
          img: 'img/cards/card5.png',
        },
        {
          id: 6,
          title: "ELLERY X M'O CAPSULE",
          text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.',
          price: '60',
          img: 'img/cards/card6.png',
        },
      ],
    };
  },
  methods: {
    up() {
      this.goods.sort((a, b) => a.price - b.price);
    },
    down() {
      this.goods.sort((a, b) => b.price - a.price);
    },
  },
  template: `
  <section class="items">
  <div class="container">
    <button @click="up">Сортировка по возрастанию</button>
    <button @click="down">Сортировка по убыванию</button>
    <div class="items__list cards cards-catalog">
      <div class="items__list-cards" v-for="good in goods" :key="good.id">
        <img :src="good.img" alt="card1" />
        <h4 class="items__list-name">{{good.title}}</h4>
        <p class="items__list-about">{{good.text}}</p>
        <p class="items__list-price">$ {{good.price}}</p>
      </div>
    </div>
  </div>
</section>
  `,
};
