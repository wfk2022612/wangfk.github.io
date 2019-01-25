<template>
  <div class="main-ui">
    <div class="head"></div>
    <div class="team">
      <img src="../assets/images/team.png" >
    </div>
    <!-- <div class="sub-title">
      时代楷模融媒体作品
    </div>
    <div class="title">
      唱响新时代英雄赞歌
    </div>

    <div class="des-sub">--记2018年“时代楷模”</div>

    <div class="details">
      <div>出品人：陈凯星、王存理</div>
      <div>总监制：葛素表</div>
      <div>策<label>划</label>划：陈知春</div>
      <div>监<label>划</label>制：牟<label>划</label>帆</div>
      <div>文<label>划</label>案：刘雨菲</div>
      <div>新华社媒体中心</div>
      <div>出品</div>
    </div> -->
    <div class="logo">
        <img src="../assets/images/logo.png" />
    </div>
    <div class="main-bottom">
      <a class="link-btn" @click="handleClick">返回</a>
    </div>
  </div>
</template>

<script>

export default {
  methods:{
    handleClick(){
      
      this.$emit("backclick",this);
    }
  }
}
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
@font-face
{
font-family: mysimfang;
src: url('../assets/fonts/simfang.ttf')
}
.main-ui{
  background-image: url(../assets/images/detail-bg.jpg);
  background-size: cover;
  background-position: top;
  width:100vw;
  height: 100vh;
  }

  .head{
    height:rem(90);
  }

  .team{
text-align: center;
    width: 100vw;
    height:rem(600);
  }

  .team img{
    width: rem(654);
    height: rem(641);
  }

.sub-title{
    font-size:rem(40);
    text-align:center;
    color : #bd0102;
    font-family:mysimfang;
    height: rem(60);
    font-weight: bold;
}
  .main-bottom{
    /* position: absolute; */
    /* bottom:rem(200); */
    margin-top: rem(40);
    width:100vw;
  }
.title{
  height:rem(80);
  font-size:rem(70);
  color:#bd0102;
  text-align: center;
  font-family: cckt;
  margin-bottom: rem(20);
}

.des-sub{
  /* height: rem(70); */
  font-size: rem(35);
  color:#bd0102;
  text-align: right;
  font-family: cckt;
}

.details{
  font-size:rem(40);
  text-align: center;
  font-family: cckt;
  color: #494949;
  font-weight: bold;
  height: rem(405);
  padding-top: rem(50);
  line-height: rem(57);

  
}
.details label{
    visibility: hidden;
  }

  .logo{
    text-align: center
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