<template>
  <div class="h-28 bg-linear-gradient-gray">
    <div v-if="navOpen == false" class="float-right">
      <TopBar @togglenav="navOpen = true" />
    </div>
    <div v-if="navOpen == true" class="float-right">
      <SideBar v-on-clickaway="away" @toggle="navOpen = false" />
    </div>
    <div class="max-w-logo max-h-logo pt-6 pb-8 pl-8">
      <a href="https://heartofgodchurch.org/">
        <img
          class="max-w-logo max-h-logo"
          alt="HOGC Logo"
          :src="require('../../assets/images/logo.png')"
        />
      </a>
    </div>
  </div>
</template>

<script>
import { directive as onClickaway } from 'vue-clickaway'
import SideBar from './SideBar'
import TopBar from './TopBar'

export default {
  name: 'NavBar',
  data: () => {
    return {
      navOpen: false
    }
  },
  directives: {
    onClickaway: onClickaway
  },
  components: {
    TopBar,
    SideBar
  },
  methods: {
    away: function() {
      this.navOpen = false
    }
  }
}
</script>

<style></style>
