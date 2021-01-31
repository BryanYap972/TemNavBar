<template>
  <div id="sidebar" class="w-40 h-screen bg-gray-90">
    <a href="" @click.prevent="toggle">
      <img :src="require('../../assets/images/Union.png')" />
    </a>
    <DropdownLink name="About us" />
    <NormalLink name="test" />
  </div>
</template>

<script>
import DropdownLink from './Links/DropdownLink.vue'
import NormalLink from './Links/NormalLink.vue'

export default {
  name: 'SideBar',
  components: {
    DropdownLink,
    NormalLink
  },
  methods: {
    toggle() {
      this.$emit('toggle')
    }
  }
}
</script>

<style></style>
