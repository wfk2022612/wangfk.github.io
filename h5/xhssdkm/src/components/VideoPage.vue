<template>
  <div>
    <video
      id="myVideo"
      ref="video"
      style="object-fit: fill; width: 100%; height: 100%;"
      preload="load"
      playsinline="true"
      webkit-playsinline="true"
      x-webkit-airplay="allow"
      airplay="allow"
      x5-video-player-type="h5"
      :x5VideoPlayerFullscreen="fullscreen"
      x5-video-orientation="portrait"
      :loop="false"
      src="../assets/movie/movie.ogg"
    ></video>
  </div>
</template>

<script>
import config from "@/assets/js/Config.js";
export default {
    data(){
        config
    }
}
</script>

