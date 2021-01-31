<template>
  <div id="burger" :class="{ active: isBugerActive }">
    <a href="" @click.prevent="toggle">
      <img :src="require('../../assets/images/menu.png')" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  data() {
    return {
      isBugerActive: false
    }
  },
  methods: {
    toggle() {
      this.isBugerActive = !this.isBugerActive
      this.$emit('togglenav')
    }
  }
}
</script>

<style></style>
