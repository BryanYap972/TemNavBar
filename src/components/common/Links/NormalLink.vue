<template>
  <div>
    <li>
      <a :href="url">{{ name }}</a>
    </li>
  </div>
</template>

<script>
export default {
  name: 'NormalLink',
  props: {
    name: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    }
  }
}
</script>

<style></style>
