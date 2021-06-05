<template>
  <youtube
    ref="youtube"
    :video-id="videoId"
    :player-vars="playerVars"
    fit-parent
    style="height: 100%"
    @ready="speedup"
  ></youtube>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['videoId', 'muted'],
  data() {
    return {
      playerVars: {
        autoplay: 1,
        origin: 'http://localhost:3000/',
      },
    }
  },
  methods: {
    speedup() {
      this.$refs.youtube.player.setPlaybackRate(2)
      if (this.muted) {
        this.$refs.youtube.player.setVolume(0)
      }
    },
  },
}
</script>

<style>
iframe {
  height: 100%;
}
</style>
