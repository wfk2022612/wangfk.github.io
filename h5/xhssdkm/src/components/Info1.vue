<template>
  <transition name="main">
    <div class="lt-full zmiti-detail-main-ui show" ref="page">
      <div
        :style="{background:'url('+imgs.detailBg+') no-repeat center top',backgroundSize:'cover','min-height':'100vh'}"
      >
        <div class="zmiti-index-logo">
          <img :src="imgs.logo" alt>
        </div>
        <h1></h1>
        <div class="zmiti-detail-title" v-if="titleImg">
          <img :src="titleImg" alt>
        </div>
        <div class="zmiti-detail-title" v-if="title">{{title}}</div>

        <div class="zmiti-image">
          <button @click="handleLeftClick" v-show="index!=0" class="left-btn">&lt;</button>
          <div class="zmiti-image-border" >
            <img :src="img" alt v-if="img" >
          </div>

          <button @click="handleRightClick" v-show="index!=data.length-1" class="right-btn">&gt;</button>
        </div>

        <div class="zmiti-subtitle" v-if="subTitle">{{subTitle}}</div>
        <!-- <div class="zmiti-image-text" v-if="des">
          <div>{{des}}</div>
        </div>-->
        <div class="zmiti-comment"></div>
        <div class="link-btn-container" v-if="link">
          <a class="link-btn" :href="link">进入查看</a>
        </div>
      </div>
      <!-- <section class="zmiti-back">
        <img :src="imgs.back" alt>
      </section>-->
    </div>
  </transition>
</template>

<script>
import config from "@/assets/js/Config.js";
export default {
  name:"info",
  data() {
    return {
      config,
      index: 0
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
    }
  },
  methods: {
    handleLeftClick() {
      var _this = this;
      this.index--;
      if (this.index < 0) {
        this.index = 0;
      }
    },
    handleRightClick() {
      var _this = this;
      this.index++;
      if (this.index >= this.data.length) {
        this.index = this.data.length - 1;
      }
    }
  }
};
</script>

<style scope>
.lt-full {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.zmiti-text-overflow {
  overflow: hidden;
  white-space: nowrap;
  word-break: break-all;
  text-overflow: ellipsis;
  -webkit-text-overflow: ellipsis;
}

.zmiti-play {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  position: fixed;
  z-index: 1000;
  right: 0.5rem;
  top: 0.5rem;
}

.zmiti-play.rotate {
  -webkit-animation: rotate 5s linear infinite;
  animation: rotate 5s linear infinite;
}

@-webkit-keyframes rotate {
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.zmiti-detail-main-ui {
  background: #fff;
  color: #504125;
  z-index: -1;
  opacity: 0;
  overflow: hidden;
}

.zmiti-detail-main-ui.show {
  z-index: 1230;
  opacity: 1;
}

.zmiti-detail-main-ui > div {
}

.zmiti-detail-main-ui .zmiti-detail-title {
  width: 70%;
  margin: 0 auto;
  font-size: 0.5em;
}

.zmiti-detail-main-ui h1 {
  height: 145px;
}

.zmiti-detail-main-ui .zmiti-video-C {
  width: 750px;
}

.zmiti-detail-main-ui .zmiti-video-C video {
  width: 100%;
}

.zmiti-detail-main-ui .zmiti-video-text,
.zmiti-detail-main-ui .zmiti-image-text {
  width: 80%;
  margin: 20px auto;
}

.zmiti-detail-main-ui .zmiti-video-text div,
.zmiti-detail-main-ui .zmiti-image-text div {
  text-indent: 2em;
}

.zmiti-detail-main-ui .zmiti-video-text {
  text-indent: 2em;
}

.zmiti-detail-main-ui .zmiti-index-logo {
  position: absolute;
  width: 160px;
  right: 30px;
  bottom: 20px;
}

.zmiti-detail-main-ui .zmiti-subtitle {
  width: 90%;
  margin: 0 auto;
  text-align: left;
  height: auto;
  color: #754c24;
  font-weight: 900;
  font-size: 26px;
  height: auto;
  text-indent: 52px;
  margin-bottom: 26px;
}

.zmiti-detail-main-ui .zmiti-comment {
  margin-top: 120px;
  position: relative;
  background: #fff;
}

.zmiti-detail-main-ui .zmiti-comment:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 40px;
  z-index: -1;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

.zmiti-detail-main-ui .zmiti-comment:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 40px;
  z-index: -1;
  left: 0;
  bottom: -5px;
  background: #fff;
}

.zmiti-detail-main-ui .zmiti-comment h2 {
  display: -webkit-box;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-box-orient: horizontal;
  -webkit-box-pack: justify;
  width: 90%;
  font-weight: normal;
  margin: 0 auto;
  font-size: 30px;
  height: 80px;
}

.zmiti-detail-main-ui .zmiti-comment h2 > div:nth-of-type(1) {
  color: #a0a0a0;
}

.zmiti-detail-main-ui .zmiti-comment h2 span {
  color: #4a586c;
}

.zmiti-detail-main-ui .zmiti-comment h2 img {
  width: 30px;
}

.zmiti-detail-main-ui .zmiti-comment .zmiti-comment-item {
  display: -webkit-box;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-box-orient: horizontal;
  width: 90%;
  margin: 20px auto;
  -webkit-box-align: start;
}

.zmiti-detail-main-ui .zmiti-comment .zmiti-comment-item > div {
  margin: 0 10px;
}

.zmiti-detail-main-ui .zmiti-comment .zmiti-comment-item > div:nth-of-type(1) {
  -webkit-box-flex: 1;
}

.zmiti-detail-main-ui .zmiti-comment .zmiti-comment-item > div:nth-of-type(2) {
  -webkit-box-flex: 11;
  color: #282727;
}

.zmiti-detail-main-ui
  .zmiti-comment
  .zmiti-comment-item
  > div:nth-of-type(2)
  > div {
  font-size: 28px;
  line-height: 40px;
}

.zmiti-detail-main-ui
  .zmiti-comment
  .zmiti-comment-item
  > div:nth-of-type(2)
  > div:nth-of-type(1) {
  color: #a0a0a0;
  font-size: 24px;
  margin-top: -5px;
}

.zmiti-detail-main-ui .zmiti-comment .zmiti-more {
  border-top: 1px solid #e9e4d8;
  text-align: center;
  height: 100px;
  color: #787878;
  line-height: 100px;
}

.zmiti-detail-main-ui .zmiti-image-text {
  font-size: 28px;
  line-height: 42px;
}

.zmiti-detail-main-ui .zmiti-image {
  width: 80%;
  margin: 40px auto 20px;
  background: #ead7a4;
  padding: 10px;
  position: relative;
  /* height: 30vh; */
  /* max-height: 30vh;
  max-width: 80vw; */
}

.zmiti-detail-main-ui .zmiti-image-border {
  /* content: ""; */
  /* position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0; */
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
}

.zmiti-back {
  width: 100px;
  height: 100px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
}

.right-btn {
  position: absolute;
  right: -10%;
  top: 45%;
  width: 8%;
  height: 8%;
}

.left-btn {
  position: absolute;
  left: -10%;
  top: 45%;
  width: 8%;
  height: 8%;
}

.link-btn-container {
  width: 100vw;
  position: fixed;
  margin: 0 auto;
  text-align: center;
  bottom: 10vh;
}
.link-btn {
  font-size: 0.6em;
  color: #754c24;
}
</style>