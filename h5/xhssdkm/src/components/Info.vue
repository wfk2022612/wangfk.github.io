<template>
  <div
    class="main"
    :style="{background:'url('+imgs.detailBg+') no-repeat center top','background-size':'cover'}">
    <div class="title">
      <transition name="slide-fade">
        <div v-if="showTitle" class="title-text">{{titleText}}</div>
        <!-- <canvas v-if="showTitle" class="title-text">{{titleText}}</canvas> -->
      </transition>
    </div>

    <div class="image-container">
      <div class="image-bg" style="position:relative">
        <img :src="imgs.imgBorder" style="width: 592px;">
      </div>

      <div class="image" :style="{'border-image':''}">
        <div
          class="camera"
          :style="{width:(width)+'px',height:'395px'}">
          <div
            class="ani"
            :style="{display: 'flex',position:'relative',left:cameraLeft+'px',width:(data.length*width)+'px'}">
            <img
              :style="{width:width+'px',height:'423px'}"
              :src="d.img"
              v-for="(d,i) in data"
              :key="i">
          </div>
        </div>
      </div>
      <div @click="handleLeftClick" class="left-btn">
        <img :src="imgs.lbtn" style="transform: rotate(0deg);" />
      </div>
      <div @click="handleRightClick" class="right-btn">
        <img :src="imgs.rbtn" />
      </div>
    </div>
    <div class="des">
      <transition name="slide-fade">
        <div v-if="showTitle"  style="font-size: 0.8em;">{{subTitleText}}</div>
      </transition>
    </div>
    <div class="forward">
        <img :src="imgs.entry" @click="navigate" />
    </div>
    <!-- <div class="bottom" :style="{background: 'url('+imgs.indexBgBottom2+')'}">
        
    </div> -->
    <div class="logo">
      <img :src="imgs.logo" alt>
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
      titleText: "",
      subTitleText:"",
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
      var lastIndex=this.index
      this.index--;
      if (this.index < 0) {
        this.index = 0;
	    }
	   
      if(lastIndex!=this.index){
        this.cameraLeft += this.width;
      if (this.cameraLeft >= 0) {
        this.cameraLeft = 0;
      }
        this.aniShow()
      }
    },
    handleRightClick() {
      var _this = this;
      var lastIndex=this.index
      this.index++;
      if (this.index >= this.data.length-1) {
        this.index = this.data.length - 1;
	    }
      
	   
      if(lastIndex!=this.index){
        this.cameraLeft -= this.width;
      if (Math.abs(this.cameraLeft) >= this.data.length* this.width) {
        this.cameraLeft = this.data.length * this.width*-1;
      }
        this.aniShow()
      }
      
    },
    aniShow(){
        this.showTitle = false;
        setTimeout(() => {
          this.titleText = this.title;
          this.subTitleText=this.subTitle
          this.showTitle = true;
        }, 300);

    },
    handleClick() {
     
      
      //    alert(this.cameraLeft)
    },
    navigate() {
		window.location.href=this.link;
	}
  },
  mounted() {
    this.titleText = this.title;
    this.subTitleText=this.subTitle
  }
};
</script>
<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
.title-text{
    font-weight: bold;
    position: absolute;
    bottom: 0px;
    width: 85%;
    font-size: 1.3em;
    -webkit-text-stroke: 1px #FFFFFF;
    color: #bf0200;
  }
.left-btn{
	width: 58px;
    height: 66px;
    position: relative;
    /* background-color: red; */
    top: -250px;
    left: 10px;
}
.right-btn{
  position: absolute;
    z-index: 1;
    width: 56px;
    right: 10px;
    top: 350px;
    height: 66px;
}
.image-bg {
  position: absolute;
  width: 100vw;
  text-align: center;
  margin-top: 6px;
}
.image-bg img{
      display: inline-block;
        box-shadow: 2px 2px 10px black;
}
.image-container {
  height: 458px;
}
.slide-fade-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}

.ani {
  transition: all 0.8s ease;
}

.main {
  width: 100vw;
  height: 100vh;
  font-size: 10px;
}
.title {
  padding: 100px 50px 0px 50px;
    height: 75px;
    font-size: 3em;
    margin: 0 auto 20px auto;
    color: black;
    font-weight: bold;
    margin-top: 0;
    text-align: center;
    overflow: hidden;
    width: 500px;
    position: relative;
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
  width: 50%;
  margin-top: -43px;
    
}

.logo {
  
  position: fixed;
  right: 10px;
  bottom: 10px;
  width: 150px;
}

.camera {
  overflow: hidden;
  margin: 0 auto;
  margin-top: 5px;
}

.bottom{
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 125px;
}
</style>
