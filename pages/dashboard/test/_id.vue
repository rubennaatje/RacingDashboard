<template>
  <p>{{ id }}</p>
</template>

<script>
export default {
  layout: 'dashboard',
  asyncData({ params }) {
    const id = params.id
    return { id }
  },
}
</script>

<style></style>
