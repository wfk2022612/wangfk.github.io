<template>
  <div @click="playVideo" style="height:100vh;width:100vw" class="video-ui">
    <div v-show="!showVideo" class="play-btn">
      <img src="../assets/images/playbtn.png">
    </div>
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
        this.showVideo=false;
        _this.$router.push("/book")
      });
      utils.pause("my_video")  
      utils.pauseAudio("bgMusic")
      
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

<style scoped>

.video-ui{
  background-image: url(../assets/images/video.jpg) ;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
}

.play-btn{
  width: 100vw;
  text-align: center;
  line-height: 0.9rem;
  position: absolute;
  animation: scale 1s linear infinite alternate;
  top:40%;

  
}
.play-btn img{
    width:96px;
    height:96px;
  }
@keyframes scale {
  from {
    -webkit-transform: scale(0.96) translateZ(1px);
  }
  to {
    -webkit-transform: scale(1.04) translateZ(1px);
  }
}

</style>