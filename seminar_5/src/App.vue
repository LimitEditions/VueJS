<template>
  <AuphVue :isAuph="true" />
  <UserList />
  <CalcIpoteka />
</template>

<script>
import AuphVue from './components/AuphVue.vue';
import CalcIpoteka from './components/CalcIpoteka.vue';
import UserList from './components/UserList.vue';
export default {
  name: 'App',
  components: {
    AuphVue,
    UserList, 
    CalcIpoteka
  }
}


</script>

<style></style>
