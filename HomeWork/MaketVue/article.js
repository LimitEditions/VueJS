const Articles = {
    data() {
        return {
            isActive: false,
            buttons: ['Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planning', 'Bathroom'],
            articleImg: [
                { category: 'Kitchen', src: './img/Kitchen_main.png' },
                { category: 'Bedroom', src: './img/Bedroom_main.jpg' },
                { category: 'Building', src: './img/Building_main.jpg' },
                { category: 'Architecture', src: './img/Architecture_main.jpg' },
                { category: 'Kitchen Planning', src: './img/Kitchen Planning_main.jpeg' },
                { category: 'Bathroom', src: './img/Bathroom_main.jpg' },
            ],
            pictures: [
                { category: 'Kitchen', src: './img/Kitchen.png' },
                { category: 'Bedroom', src: './img/Bedroom.jpg' },
                { category: 'Building', src: './img/Building.jpg' },
                { category: 'Architecture', src: './img/Architecture.jpg' },
                { category: 'Kitchen Planning', src: './img/Kitchen Planning.jpeg' },
                { category: 'Bathroom', src: './img/Bathroom.jpg' },
            ]
        };
    },

    methods: {
        article(category) {
            this.isActive = category;
        }
    },

    computed: {
        sortedImages() {
            if (this.isActive) {
                const category = this.isActive;
                return this.articleImg.filter(image => image.category === category);
            }
            return this.articleImg;
        },
        sortedPictures() {
            if (this.isActive) {
                const category = this.isActive;
                return this.pictures.filter(image => image.category === category);
            }
            return this.articleImg;
        }
    },

    template: `
    <div v-show="isActive !== false" class="details">
    <h2 class="details__headding">Let’s Get Solution for Building Construction Work</h2>
    <img class="post__articles_img" v-for="img in sortedImages" :key="img.category" :src="img.src" alt="picture_main">
    <div class="details__lable">
        <p class="details__lable_date"> 26 December,2022 </p>
        <p class="details__lable_date"> Interior / Home / Decore</p>
    </div>
    <p class="details__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. <span style="color: rgba(0, 0, 0, 0)">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ab assumenda excepturi dolor corporis sit sunt.</span> Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
    <div class="details__comments">
        <div class="details__comments-block">
            <img class="details__comments_mark" src="./img/mark.png" alt="mark">
            <i class="details__comments_text">The details are not the details. They make the design.</i>
        </div>
    </div>
    <h2 class="details__headding">Design sprints are great</h2>
    <p class="details__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
    <div>
        <ol class="details__list">
            <li class="details__text">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
            <li class="details__text">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
            <li class="details__text">Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
        </ol>
    </div>
    <img class="post__articles_img" v-for="img in sortedPictures" :key="img.category" :src="img.src" alt="picture_main">
    <p style="margin-top: 44px; margin-bottom: 0px;" class="details__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
    </div>
    <div class="tags">
        <h3 class="tags__name">Tags</h3>
        <div class="tags__btn">
            <button v-for="button in buttons" :key="button" class="tags__btn_style" :class="{tags__btn_active: isActive === button}" @click="article(button)">{{ button }}</button>
        </div>
    </div>
    `
};