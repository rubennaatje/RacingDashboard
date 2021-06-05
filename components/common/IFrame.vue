<template>
  <div class="container">
    <iframe
      :src="url"
      width="100%"
      height="100%"
      style="height: 100%; max-width: 100%"
      frameborder="0"
    >
    </iframe>
  </div>
</template>

<script>
export default {
  name: 'IFrame',
  // eslint-disable-next-line vue/require-prop-types
  props: ['url'],
}
</script>

<style scoped>
.container {
  height: 100%;
}
</style>
