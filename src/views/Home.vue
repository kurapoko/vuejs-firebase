<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Address />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Address from '@/components/Address.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Address
  }
}
</script>
