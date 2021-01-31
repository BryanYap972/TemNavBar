<template>
  <!--
  <div id="divv" class="h-screen">
   -->
  <div>
    <NavBar />
  </div>
</template>

<script>
import NavBar from './components/common/NavigationBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
#divv {
  background-image: url('./assets/images/test.png');
}
</style>
