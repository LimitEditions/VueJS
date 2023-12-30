const App = {
    data() {
        return {
            cards:[
                {
                    id: 1,
                    name: 'Kitchan Design',
                    img: './img/News1.png',
                    title: 'Let’s Get Solution For Building Construction Work',
                    data: '26 December,2022',
                },
                {
                    id: 2,
                    name: 'Living Design',
                    img: './img/News2.png',
                    title: 'Low Cost Latest Invented Interior Designing Ideas',
                    data: '22 December,2022',
                },
                {
                    id: 3,
                    name: 'Interior Design',
                    img: './img/News3.png',
                    title: 'Best For Any Office & Business Interior Solution',
                    data: '25 December,2022',
                },
                {
                    id: 4,
                    name: 'Kitchan Design',
                    img: './img/News4.png',
                    title: 'Let’s Get Solution For Building Construction Work',
                    data: '26 December,2022',
                },
                {
                    id: 5,
                    name: 'Living Design',
                    img: './img/News5.png',
                    title: 'Low Cost Latest Invented Interior Designing Ideas',
                    data: '22 December,2022',
                },
                {
                    id: 6,
                    name: 'Interior Design',
                    img: './img/News6.png',
                    title: 'Best For Any Office & Business Interior Solution',
                    data: '25 December,2022',
                },
            ]

        }
    },

    methods: {
        
    },
}

Vue.createApp(App).mount('#app');