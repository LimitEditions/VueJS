<template>
<h1>Задание 1</h1>
<p>count: {{ count }}</p>
<button @click="increment">+</button>
<button @click="decrement">-</button>
<h2>Задание 2</h2>
<button @click="addItemToCart({ id: 1, name: 'Товар', price: 10})">Добавить в корзину</button>
<ul>
  <li v-for="item in cartItems" :key="item.id">{{ item.name }} - {{ item.price }}</li>
</ul>
<p>Количество товаров в корзине : {{ totalItems }}</p>
<p>Сумма товаров в корзине : {{ totalPrice }}</p>
<h2>Задание 3</h2>
<ul>
  <li v-for="(item, index) in data" :key="index">{{ item }}</li>
</ul>
<button @click="getData">Получить данные</button>

</template>

<script>
// Создание базового хранилища: Создайте новое Vuex-хранилище, определите в нем состояние (state) и несколько базовых мутаций (mutations). Подключите хранилище к вашему приложению Vue.js и используйте его для управления состоянием приложения.
// Создайте счетчик который хранит состояние count
// Создайте две мутации, которые увеличивают и уменьшают значение счетчика 
// Создайте компонент счетчик

// Управление корзиной покупок
// Вы разрабатываете интернет-магазин и вам необходимо реализовать функциональность управления корзиной покупок с использованием Vuex и геттеров.
// Создайте хранилище Vuex с именем "store".
// В состоянии (state) хранилища создайте массив "cartItems", в котором будут храниться объекты товаров в корзине. Каждый объект товара должен иметь следующие свойства: id, name, price.
// Создайте мутацию (mutation) с именем "ADD_ITEM_TO_CART", которая принимает товар в качестве параметра и добавляет его в массив "cartItems".
// Создайте геттер (getter) с именем "cartItems", который возвращает массив товаров в корзине.
// <button @click="addItemToCart({ id: 1, name: 'Товар', price: 10})">
// Добавить в корзину</button>

// Вам необходимо создать функциональность получения данных с сервера и сохранения их в хранилище Vuex с использованием действий.

// В вашем хранилище Vuex создайте состояние (state), в котором будет храниться массив данных.
// Создайте мутацию (mutation) для сохранения полученных данных в состояние.
// Создайте действие (action) для выполнения запроса к серверу и вызова соответствующей мутации.
// В вашем компоненте Vue.js вызовите действие для получения данных с сервера и отобразите их на вашем компоненте.

import {  mapState, mapMutations, mapGetters, mapActions} from 'vuex';
export default {
  name: 'App',
  computed: {
    ...mapState(['count', 'data']),
    ...mapGetters(['cartItems', 'totalItems', 'totalPrice'])
  },
  methods:{
    ...mapMutations(['increment', 'decrement']),
    ...mapActions(['addItemToCart', 'getData'])
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
