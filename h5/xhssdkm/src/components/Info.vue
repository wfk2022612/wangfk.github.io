<template>
  <div>
    <div class="main" v-show="!showTeamPage">
      <div class="main-ui">
        <div class="top">
          <transition name="fade">
            <div class="title" v-if="showTitle">{{titleText}}</div>
          </transition>
        </div>
        <div class="picture">
          <div class="image">
            <img ref="img" :src="img">
            <img class="img-border" src="@/assets/images/img-bg-border.png">
          </div>
        </div>
        <Pager :total=11 :current=1 v-on:pagechanged="pageChanged"></Pager>
        <div class="des">
          <transition name="fade">
            <div v-if="showTitle">{{subTitleText}}</div>
          </transition>
        </div>
      </div>
      <div class="bottom">
        <a class='link-btn' :href="link">
          先进事迹
        </a>
      </div>
      <div class="logo">
        <img class="logo-img" src="../assets/images/logo2.png">
      </div>
      <div @click="showTeam" class="link-team">
        <img class="link-team-img" src="../assets/images/zztd.png">
      </div>
    </div>
    <TeamPage v-show="showTeamPage" v-on:backclick="handleBackClick"/>
    </div>
  </template>

  <script>
/* eslint-disable */
import config from "@/assets/js/Config.js";
import utils from "@/assets/js/Utils.js";
import Pager from "@/components/Pager";
import TeamPage from '@/components/TeamPage';

export default {
  name: "info",
  data() {
    return {
      config,
      index: 0,
      showTitle: true,
      titleText: "",
      subTitleText: "",
      width: 570,
      fullscreen:true,
      showTeamPage:false
    };
  },
  components:{
    Pager,
    TeamPage
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
    },
    pageChanged(current){
      
      this.index=current-1;
      this.aniShow();
    },
    showTeam(){
      this.showTeamPage=true;
    },
    handleBackClick(){
      
      this.showTeamPage=false;
    }
  },
  mounted() {
    if (this.$route.params["index"]) {
      this.index = this.$route.params["index"];
    }
    this.titleText = this.title;
    this.subTitleText = this.subTitle;
   

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
.main {
  width: rem($design);
  background: url(../assets/images/detail-bg.jpg) no-repeat center top;
  background-size: 100vw 100vh;
  height: 100vh;
  overflow: hidden;
  overflow-y: auto;

  .main-ui {
    .top {
      height: rem(120);
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
        // -webkit-text-stroke: 1px white;
        position: absolute;
        bottom: 0;
        font-family: cckt;
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
        height: rem(397);
        width: rem(577);
        // background-color: brown;
        margin: {
          top: rem(12);
          left: auto;
          right: auto;
        }

        img {
          position: relative;
          z-index: 0;
          display: block;
          width: rem(577);
          height: rem(397);
          float: left;
        }

        .img-border {
          position: absolute;
          width: 667px;
          height: 487px;
          left: -45px;
          top: -31px;
        }
      }
    }

    .des {
      height: rem(250);
      //   background-color: yellow;
      //   opacity: 0.5;
      width: rem(590);
      margin: 0 auto;
      font-family: cckt;
      text-indent: rem(60);

      div {
        font-size: rem(30);
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

  .link-team {
    // position: absolute;
    bottom: 40px;
    left: rem(30);
    width: rem(216);
    height: rem(30);
    padding-left: rem(30);
    // margin-top:rem(80); 
  }
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}


</style>
