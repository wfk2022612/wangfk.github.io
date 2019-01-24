<template>
  <div class="main-ui">
    <div class="sub-title">
      时代楷模融媒体作品
    </div>
    <div class="title">
      战鹰，为祖国奋飞
    </div>

    <div class="details">
      <div>出品人：陈凯星、王存理</div>
      <div>总监制：葛素表</div>
      <div>策划：陈知春</div>
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
.main-ui{
  background-image: url(../assets/images/detail-bg.jpg);
  background-size: cover;
  background-position: center;
  width:100vw;
  height: 100vh;

  
  }
.sub-title{
    font-size:rem(70);
    text-align:center;
    color : #f00000;
    font-family:"宋体";
    margin-top: rem(20);
    
  .main-bottom{
    position: absolute;
    bottom:rem(250);
    width:100vw;
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