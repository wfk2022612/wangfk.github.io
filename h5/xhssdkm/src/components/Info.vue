<template>
  <div class="main">
    <div class="main-ui">
      <div class="top">
        <transition name="fade">
          <div class="title" v-if="showTitle">{{titleText}}</div>
        </transition>
      </div>
      <div class="picture">
        <div class="lbtn" @click="leftClick">
          <img src="../assets/images/left-btn.png">
        </div>
        <div class="rbtn" @click="rightClick">
          <img src="../assets/images/right-btn.png">
        </div>
        <div class="image">
          <div class="image-container" :style="{left:cameraLeft+'px'}">
            <img ref="img" v-for="content in config.contents" :src="content.img" :key="content.src">
          </div>
        </div>
      </div>
      <div class="des">
        <transition name="fade">
          <div v-if="showTitle">{{subTitleText}}</div>
        </transition>
      </div>
    </div>
    <div class="bottom">
      <a :href="link">
        <img src="../assets/images/entry.png">
      </a>
    </div>
    <div class="logo">
      <img class="logo-img" src="../assets/images/logo2.png">
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import config from "@/assets/js/Config.js";
export default {
  name: "info",
  data() {
    return {
      config,
      index: 0,
      showTitle: true,
      titleText: "",
      subTitleText: "",
      width: 570
    };
  },
  computed: {
    imgs() {
      return config.imgs;
    },
    data() {
      return config.contents;
    },
    current() {
      return this.data[this.index];
    },
    title() {
      return this.current.title;
    },
    titleImg() {
      return this.current.titleImg;
    },
    img() {
      return this.current.img;
    },
    subTitle() {
      return this.current.subTitle;
    },
    des() {
      return this.current.des;
    },
    link() {
      return this.current.link;
    },
    cameraLeft() {
      return this.width * this.index * -1;
    }
  },
  methods: {
    leftClick() {
      var _this = this;
      var lastIndex = this.index;
      this.index--;
      if (this.index < 0) {
        this.index = 0;
      }
      this.$router.replace(`/info/${this.index}`);
      if (lastIndex != this.index) {
        this.aniShow();
      }
    },
    rightClick() {
      var _this = this;
      var lastIndex = this.index;
      this.index++;
      if (this.index >= this.data.length - 1) {
        this.index = this.data.length - 1;
      }
      this.$router.replace(`/info/${this.index}`);
      if (lastIndex != this.index) {
        this.aniShow();
      }
    },
    aniShow() {
      this.showTitle = false;
      setTimeout(() => {
        this.titleText = this.title;
        this.subTitleText = this.subTitle;
        this.showTitle = true;
      }, 300);
    },
    navigate() {
      window.location.href = this.link;
    }
  },
  mounted() {
    if (this.$route.params["index"]) {
      this.index = this.$route.params["index"];
    }
    this.titleText = this.title;
    this.subTitleText = this.subTitle;
    var playId = setInterval(() => {
      if (window.canplay === true) {
        var audio = document.getElementById("bgMusic");
        if (audio.muted == true) {
          audio.currentTime = 0;
        }
        audio.muted = false;
        audio.play();
        window.clearInterval(playId);
      }
    }, 100);
  }
};
</script>

<style lang="scss" scoped>
$fontsize: 75;
$design: 750;

@function rem($px) {
  @return $px/$fontsize * 1rem;
}

.main {
  width: rem($design);
  background: url(../assets/images/detail-bg.jpg) no-repeat center top;
  background-size: cover;
  height: 100vh;
  overflow: hidden;
  overflow-y: auto;

  .main-ui {
    .top {
      height: rem(200);
      //width: rem(750);
      position: relative;
      overflow: hidden;
      text-align: center;
      padding: 0 rem(100);

      .title {
        // height: rem(170);
        width: rem(550);
        margin: 0 auto;
        font-size: rem(40);
        font-weight: bold;
        // background-color: green;
        // opacity: 0.5;
        color: #bf0200;
        -webkit-text-stroke: 1px white;
        position: absolute;
        bottom: 0;
        transition: all 0.8s;
      }
    }

    .picture {
      width: rem($design);
      height: rem(450);

      position: relative;
      padding-top: rem(12);

      .lbtn {
        position: absolute;
        // background-color: aqua;
        width: rem(61);
        height: rem(72);
        top: rem(180);
        left: rem(10);
        text-align: right;
        img {
          width: rem(53);
          height: rem(47);
        }
      }

      .rbtn {
        position: absolute;
        // background-color: darkgoldenrod;
        width: rem(61);
        height: rem(72);
        top: rem(180);
        right: rem(10);
        text-align: left;

        img {
          width: rem(53);
          height: rem(47);
        }
      }

      .image {
        position: relative;
        height: rem(390);
        width: rem(570);
        // background-color: brown;
        margin: {
          top: rem(12);
          left: auto;
          right: auto;
        }
        overflow: hidden;
        box-shadow: rem(1) rem(3) rem(10) rem(1);

        img {
          position: relative;
          z-index: 0;
          display: block;
          width: rem(570);
          height: rem(390);
          float: left;
        }

        .image-container {
          height: rem(390);
          width: rem(570 * 12);
          position: relative;
          transition: all 0.8s;
        }
      }

      .image:before {
        content: "";
        // border: rem(10) transparent solid;
        border-width: rem(10);
        // border-color: transparent;
        border-style: solid;
        width: rem(550);
        height: rem(370);
        position: absolute;
        display: block;
        top: rem(0);
        left: rem(0);
        box-shadow: 0 0 rem(30);
        border-image: url(../assets/images/img-bg-border.png) 10 stretch;
        z-index: 1;
      }
    }

    .des {
      height: rem(250);
      //   background-color: yellow;
      //   opacity: 0.5;
      width: rem(590);
      margin: 0 auto;

      text-indent: rem(45);

      div {
        font-size: rem(25);
        transition: all 0.8s;
      }
    }
  }
  .bottom {
    height: rem(110);
    text-align: center;
    bottom: rem(200);
    img {
      width: rem(375);
      margin-top: rem(-70);
    }
  }
  .logo {
    position: absolute;
    bottom: 40px;
    right: 0px;
    width: 180px;
  }
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
