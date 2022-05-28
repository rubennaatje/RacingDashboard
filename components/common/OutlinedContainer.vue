<template>
  <div style="height: 100%">
    <section class="fieldset">
      <h1 class="fieldset-title">
        {{ title }}
        <span v-if="!hideOutline" @click="$emit('delete')"> - delete</span>
      </h1>
      <slot class="unclickable" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'Container',
  // eslint-disable-next-line vue/require-prop-types
  props: ['title', 'hideOutline'],
}
</script>

<style>
.fieldset {
  position: relative;
  border: 1px solid #ddd;
  padding: 1px;
  width: 100%;
  height: 100%;
}
.fieldset .fieldset-title {
  position: absolute;
  top: 0;
  font-size: var(--global-font-size);
  line-height: var(--global-line-height);
  margin: -9px 0 0; /* half of font-size */
  background: #121212;
  padding: 0 3px;
}

.unclickable {
  pointer-events: none;
}
.video-js {
  width: 100%;
  height: 100%;
}
</style>
© 2021 GitHub, Inc.
