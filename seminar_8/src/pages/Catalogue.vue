<template>
    <div>
        <h1>Products</h1>
        <ul>
            <li v-for="product in paginatedProducts" :key="product.id">{{ product.name }}</li>
        </ul>
        <div v-if="totalPages > 1">
            <router-link style="margin-right: 5px;" v-for="pagenumber in totalPages" :key="pagenumber" :to="getPageLink(pagenumber)">{{ pagenumber }}</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [
                { id: 1, name: "product1" },
                { id: 2, name: "product2" },
                { id: 3, name: "product3" },
                { id: 4, name: "product4" },
                { id: 5, name: "product5" },
                { id: 6, name: "product6" },
                { id: 7, name: "product7" },
                { id: 8, name: "product8" },
                { id: 9, name: "product9" },
                { id: 10, name: "product10" },
                { id: 11, name: "product11" },
                { id: 12, name: "product12" },
                { id: 13, name: "product13" },
                { id: 14, name: "product14" },
                { id: 15, name: "product15" },
                { id: 16, name: "product16" },
                { id: 17, name: "product17" }


            ],

            itemsPerPage: 3


        };
    },

    computed: {
        totalPages() {
            return Math.ceil(this.products.length / this.itemsPerPage)
        },

        paginatedProducts() {
            const pagenumber = this.getCurrentPageNumber()
            const startIndex = (pagenumber - 1) * this.itemsPerPage
            const endIndex = startIndex + this.itemsPerPage
            return this.products.slice(startIndex, endIndex)

        }

    },
    methods: {
        getCurrentPageNumber() {
            const pageNumberParam = parseInt(this.$route.params.pagenumber)
            return isNaN(pageNumberParam) || pageNumberParam < 1 ? 1 : pageNumberParam
        },
        getPageLink(pagenumber) {
            return `/catalogue/${pagenumber}`
        }

    }

}
</script>

<style lang="scss" scoped></style>