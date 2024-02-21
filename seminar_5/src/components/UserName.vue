<template>
    <div>
      <p>{{ user.id }}</p>
      <p>{{ user.name }}</p>
      <p>{{ user.email }}</p>
    </div>
  </template>
  
  <script>
    export default {
      props: {
        user: Object,
      }
    }
  </script>
  
  <style scoped>
  
  </style>