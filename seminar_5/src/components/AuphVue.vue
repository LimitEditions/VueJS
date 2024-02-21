<template>
    <div v-if="isAuph">
        <h1>Добро пожаловать</h1>
    </div>
    <div>
        <input type="text">
        <input type="text">
        <button>Кнопка</button>
    </div>
</template>

<script>
    export default {
        props:{
            isAuph: Boolean,
        }
    }
</script>

<style lang="scss" scoped>

</style>