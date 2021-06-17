/* eslint-disable no-console */
<template>
  <section class="container">
    <div
      v-video-player:myVideoPlayer="playerOptions"
      class="video-player-box"
      :playsinline="playsinline"
    ></div>
  </section>
</template>

<script>
// videojs
import videojs from 'video.js'
window.videojs = videojs
// hls plugin for videojs6
require('videojs-contrib-hls/dist/videojs-contrib-hls.js')

export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['videoUrl', 'muted'],
  data() {
    return {
      // component options
      playsinline: true,

      playerOptions: {
        // videojs and plugin options
        height: '360',
        sources: [
          {
            withCredentials: false,
            type: 'application/x-mpegURL',
            src: this.videoUrl,
          },
        ],
        controlBar: {
          timeDivider: false,
          durationDisplay: false,
        },
        autoplay: true,
        flash: { hls: { withCredentials: false } },
        html5: { hls: { withCredentials: false } },
        poster:
          'https://surmon-china.github.io/vue-quill-editor/static/images/surmon-5.jpg',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  margin: 0 auto;

  .video-player-box {
    height: 100%;
    width: 100%;
    .video-js {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
