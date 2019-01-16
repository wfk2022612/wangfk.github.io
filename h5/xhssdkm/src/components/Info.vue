<template>
  <div
    class="main"
    :style="{background:'url('+imgs.detailBg+') no-repeat center top','background-size':'100vw 100vh'}"
  >
    <div class="title">
      <transition name="slide-fade" style="font-size: 1em;">
        <div v-if="showTitle">{{showTitleText}}</div>
      </transition>
    </div>

    <div class="image-container">
      <div class="image-bg" style="position:relative">
        <img :src="imgs.imgBorder" style="width: 592px;">
      </div>

      <div class="image">
        <div
          class="camera"
          :style="{width:(width)+'px',height:'395px','background':'url('+imgs.imgBorder+')'}"
        >
          <div
            class="ani"
            :style="{display: 'flex',position: 'relative',left:cameraLeft+'px',width:(data.length*width)+'px'}"
          >
            <img
              :style="{width:width+'px',height:'423px'}"
              :src="d.img"
              v-for="(d,i) in data"
              :key="i"
            >
          </div>
        </div>
      </div>
	  <div @click="handleLeftClick" class="left-btn">
		  <img :src="imgs.rbtn" style="transform: rotate(180deg);"/>
	  </div>
	  <div @click="handleRightClick" class="right-btn">
		  <img :src="imgs.rbtn" />
	  </div>
    </div>
    <div class="des">{{subTitle}}</div>
    <div class="forward">
		<img :src="imgs.entry" @click="navigate" />
	</div>
    <div class="logo">
      <img  :src="imgs.logo" alt>
    </div>
  </div>
</template>

<script>
import config from "@/assets/js/Config.js";
export default {
  name: "info",
  data() {
    return {
      config,
      index: 0,
      showTitle: true,
      showTitleText: "qqeret",
      width: 566,
      cameraLeft: 0
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
	   this.cameraLeft += this.width;
      if (this.cameraLeft >= 0) {
        this.cameraLeft = 0;
	  }
    },
    handleRightClick() {
      var _this = this;
      this.index++;
      if (this.index >= this.data.length) {
        this.index = this.data.length - 1;
	  }
	 
	  this.cameraLeft -= this.width;
      if (Math.abs(this.cameraLeft) >= this.data.length * this.width) {
        this.cameraLeft = this.data.length * this.width*-1;
      }
    },
    handleClick() {
      //   this.showTitle = false;
      //   setTimeout(() => {
      //     this.showTitleText = Math.random();
      //     this.showTitle = true;
      //   }, 800);

      
      //    alert(this.cameraLeft)
    },
    navigate() {
		window.location.href=this.link;
	}
  },
  mounted() {}
};
</script>
	

<style scope="this api replaced by slot-scope in 2.5.0+">
.left-btn{
	width: 58px;
    height: 66px;
    position: relative;
    /* background-color: red; */
    top: -250px;
    left: 10px;
}
.right-btn{
	 position: relative;
    /* background-color: green; */
    z-index: 1;
    width: 56px;
    right: -685px;
        top: -306px;
    height: 66px;
}
.image-bg {
  position: absolute;
  width: 100vw;
  text-align: center;
  margin-top: 6px;
}
.image-container {
  padding-top: 75px;
  height: 458px;
}
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}

.ani {
  transition: all 3s ease;
}

.main {
  width: 100vw;
  height: 100vh;
  font-size: 10px;
}
.title {
  padding: 120px 50px 0px 50px;
  height: 75px;
  font-size: 3em;
  overflow: hidden;
  /* width: 90vw; */
  margin: 0 auto;
  color: black;
  font-weight: bold;
  /* background-color: red; */
  /* opacity: 0.5; */
  margin-top: 0;
  text-align: center;
}

.image {
  margin-top: -410px;
  /* background-color: gray;
  opacity: 0.5; */
      height: 395px;
}

.des {

    height: 250px;
    font-size: 3em;
    padding: 0px 65px;
    text-indent: 2em;
}

.forward {

  height: 120px;
  text-align: center;
}

.forward img{
	    width: auto;
    margin-top: -50px;
}

.logo {
  
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 150px;
}

.camera {
  overflow: hidden;
  margin: 0 auto;
}
</style>
