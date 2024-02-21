<template>
  <h1>Привет из App.vue</h1>
  <HelloComp />
  <GalaryComp />
</template>

<script>
import HelloComp from './components/HelloComp.vue';
import GalaryComp from './components/GalaryComp.vue';


export default {
  name: "App",
  components: {
    HelloComp,
    GalaryComp
},
};
</script>

<style lang="scss">

</style>
