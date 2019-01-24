<template>
  <div @click="entry" class="main-ui">
    <transition name="index">
      <!-- <div class="zmiti-entry">
					<img :src="imgs.entry" alt>
				</div> -->
      <canvas :width="viewW" height="500" ref="canvas"></canvas>

    </transition>
    <div class="logo">
      <img :src="imgs.logo" alt>
    </div>
  </div>
</template>

<script>
import config from "@/assets/js/Config.js";
import Point from "@/assets/js/Point.js";
import utils from '@/assets/js/Utils.js';


export default {
  name: "cover",
  data: function data() {
    return {
      config,

      pointW: 0,
      pointH: 0,
      points: [],
      show: true,
      showIndexMask: false,
      showMasks: false,
      transX: -200,
      showVideo: false,
      viewW: window.innerWidth,
      fullscreen: true,
      vidoeUrl: ""
    };
  },
  computed: {
    imgs() {
      return config.imgs;
    }
  },
  components: {},

  methods: {
    imgStart: function imgStart(e) {
      e.preventDefault();
    },

    entry() {

      var _this = this;
      this.showIndexMask = true;
      this.showVideo = false;
      // this.$router.push("/info");
      $(".flipbook").turn("next");
    },

    initPoints: function initPoints() {
      var _this2 = this;
      var config = this.config;
      var canvas = this.$refs["canvas"];
      var context = canvas.getContext("2d");

      var width = canvas.width,
        height = canvas.height;
      var img = new Image();
      img.onload = function() {
        for (var i = 0; i < 100; i++) {
          var p = new Point({
            img: img,
            context: context
          });
          _this2.points.push(p);
        }
      };

      img.src = config.imgs.point;

      var animationFrame =
          window.requestAnimationFrame || window.webkitRequestAnimationFrame,
        m = Math;

      var render = function render() {
        if (width <= 0) {
          (width = canvas.width), (height = canvas.height);
        }
        context.clearRect(0, 0, width, height);

        _this2.points.map(function(point, i) {
          point.angle += point.speed;
          //point.angle = (point.angle | 0)
          point.angle %= 360;
          point.x += m.sin((point.angle / 180) * m.PI) * point.speedX;

          point.y -= 1;
          if (point.defaultY - point.y > point.maxHeight) {
            point.y = point.defaultY;
          }
          point.update();
        });
        !_this2.showIndexMask && animationFrame(render);
      };

      render();
    }
  },
  mounted: function mounted() {
	this.initPoints();
	utils.play("bgMusic")
  }
};
</script>
<style lang="scss" scoped>
    $fontsize: 75;
    $design: 750;
    
    @function rem($px) {
      @return $px/$fontsize * 1rem;
    }
    @font-face
    {
    font-family: cckt;
    src: url('../assets/fonts/simkai.ttf')
    }

.main-ui{
  background-image: url(../assets/images/index-bg1.jpg);
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
  width: 100vw;
  height:100vh;
}

.logo {
  width: 180px;
  position: absolute;
  bottom: 40px;
  right: 0px;
  z-index: 9;
}

.entry {
  width: 5rem;
  text-align: center;
  line-height: 0.9rem;
  border-radius: 30px;
  position: absolute;
  left: 2.5rem;
  bottom: 3rem;
  z-index: 10;
  -webkit-animation: scale 1s linear infinite alternate;
  animation: scale 1s linear infinite alternate;
}

@-webkit-keyframes scale {
  from {
    -webkit-transform: scale(0.96) translateZ(1px);
  }
  to {
    -webkit-transform: scale(1.04) translateZ(1px);
  }
}
@keyframes scale {
  from {
    -webkit-transform: scale(0.96) translateZ(1px);
  }
  to {
    -webkit-transform: scale(1.04) translateZ(1px);
  }
}
@-webkit-keyframes rotate1 {
  to {
    -webkit-transform: rotate(360deg) scale(2);
    transform: rotate(360deg) scale(2);
    opacity: 0;
  }
}

.link-btn {
    background-image: url(../assets/images/btn-lg.png);
    width: rem(307);
    height: rem(71);
    display: block;
    font-size: rem(40);
    text-align: center;
    line-height: rem(70);
    overflow: hidden;
    color: white;
    margin: 0 auto;
  }

</style>