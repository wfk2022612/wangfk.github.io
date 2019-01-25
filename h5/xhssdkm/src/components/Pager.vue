<template>
  <nav class="pager">
    <ul>
      <li v-for="p in total" :key="p" :class="{current:p==pageCurrent}"
        @click="setCurrent(p)">{{p}}</li>
    </ul>
  </nav>
</template>

<script>
export default {
  data(){
    return{
      pageCurrent:this.current
    }
  },
  props: {
    current: {
      default: 1
    },
    total: {
      required: true
    }
  },
  methods:{
    setCurrent(index){
      
      if(index>=1&&index<=this.total){
        this.pageCurrent=index;
        this.$emit("pagechanged",this.pageCurrent)
      }
    }
  },
  mounted(){
    
  }
};
</script>
<style lang="scss" scoped>
$fontsize: 75;
$design: 550;

@function rem($px) {
  @return $px/$fontsize * 1rem;
}
.pager {
  font-size:rem(20);
  margin: rem(5) auto rem(20) auto;
  position: relative;
  z-index:10;
  ul {
    display: flex;
    justify-content: center;
    flex-direction: row;

    li {
      display: block;
      width: rem(30);
      height: rem(25);
      justify-content: center;
      text-align: center;
      border: 0px solid white;
      box-shadow: 1px 3px 3px gray;
      margin: 10px;
      line-height: rem(25)
    }

    .current{
      background-color: #f00000;
      color: white;
      box-shadow: 1px 3px 3px f00000;
    }
  }
}
</style>
