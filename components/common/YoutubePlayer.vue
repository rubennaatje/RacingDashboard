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
  props: ['videoId'],
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
      console.log(' we are watching!!!')
      this.$refs.youtube.player.setPlaybackRate(2)
      this.$refs.youtube.player.setVolume(0)
    },
  },
}
</script>

<style>
iframe {
  height: 100%;
}
</style>
