<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <CardLogin ></CardLogin>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import CardLogin from '@/components/Login/CardLogin.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    CardLogin,
  }
}
</script>
