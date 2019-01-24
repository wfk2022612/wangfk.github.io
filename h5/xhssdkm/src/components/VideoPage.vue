<template>
  <div @click="playVideo" style="height:100vh;width:100vw">
    <video v-show="showVideo" ref="video" id="my_video" preload="load"
      playsinline="true"
      webkit-playsinline="true" x-webkit-airplay="allow" airplay="allow"
      x5-video-player-type="h5" x5videoplayerfullscreen="true"
      x5-video-orientation="portrait" src="@/assets/movie/1M.mp4"
      style="object-fit: fill;"></video>
  </div>
</template>

<script>
import config from "@/assets/js/Config.js";
import utils from '@/assets/js/Utils.js';
export default {
    data(){
        return {
          config,
          fullscreen:true,
          loop:false,
          showVideo:false
        }
        
    },
    mounted() {
      var _this=this
        
      _this.$refs["video"].addEventListener("ended", function () {
        _this.$router.push("/book")
      });
        
      
    },

    methods: {
      playVideo(){
        utils.pause("bgMusic")
        this.showVideo=true;
        this.$refs["video"].play()
      }
    },
}
</script>
