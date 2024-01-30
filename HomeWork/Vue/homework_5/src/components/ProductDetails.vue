<template>
    <div v-for="product in products" :key="product.id">
        <h2 >
         Наименование товара: {{ product.name }}</h2>
        <p>Цена : {{ formattedPrice(product.price) }}</p>
        <p v-if="product.available">Статус доступности: Aviailable</p>
        <p v-else>Статус доступности: Out of stock</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                products: [
                {
                    name: 'Диван',
                    price: 10000,
                    available: true,
                },
                {
                    name: 'Кресло',
                    price: 7000,
                    available: true,
                },
                {
                    name: 'Кровать',
                    price: 25000,
                    available: false,
                },
                ],
            };
        },
        computed:{
            formattedPrice(){
                return (price) => `$ ${price}`;
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>