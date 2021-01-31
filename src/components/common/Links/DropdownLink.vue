<template>
  <div>
    <a href="#" @click="toggleDropdown">
      <div>
        <span class="big-font">{{ name }}</span>

        <img
          :src="imageSource"
          style="display: inline-block"
          class="select-behaviour"
        />
      </div>
    </a>
    <ul
      v-for="link in sublinks"
      v-show="isToggled"
      :key="link.name"
      class="small-font"
    >
      <li class="select-behaviour">
        <a href="#" class="small-font">{{ link.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import down from '../../../assets/images/chevron-right.png'
import up from '../../../assets/images/chevron-up.png'
export default {
  name: 'DropdownLink',
  props: {
    name: {
      type: String,
      default: ''
    },
    sublinks: {
      type: Array,
      default: function() {
        return [
          {
            name: 'dropdown1'
          },
          {
            name: 'dropdown2'
          },
          {
            name: 'dropdown3'
          },
          {
            name: 'dropdown4'
          },
          {
            name: 'dropdown5'
          },
          {
            name: 'dropdown6'
          }
        ]
      }
    }
  },
  data() {
    return {
      isToggled: false,
      imageSource: down
    }
  },
  methods: {
    toggleDropdown() {
      // Your source-changing code here
      if (this.imageSource === up) {
        this.imageSource = down
      } else {
        this.imageSource = up
      }
      this.isToggled = !this.isToggled
    }
  }
}
</script>

<style scoped>
body {
  font-family: Aktiv Grotesk, serif;
}

.big-font {
  font-size: 2rem;
  font-weight: bold;
}

.small-font {
  font-size: 1rem;
}

.select-behaviour {
  background-color: transparent;
}
</style>
