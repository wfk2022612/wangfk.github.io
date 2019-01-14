<template>
    <div class="main">
        <div class="left-button" @click="leftClick">
            &lt;
        </div>
        <div class="img">
            <img :src="current.img">
        </div>
        <div class="right-button" @click="rightClick">
            &gt;
        </div>

        <div class="des">
            {{current.des}}
        </div>
    </div>
</template>

<script>
// var  config =require( '@/assets/js/Config.js')
//    
export default{
    data(){
        return {
            config:require( '@/assets/js/Config.js'),
            index:0
        }
    },
    computed:{
        current(){
            return  this.contents[this.index];
        },
        contents(){ 
            return this.config.contents
        }
    },
    methods:{
        leftClick(){
            this.index--;
            if(this.index<=0)
            {
                this.index=0
            }
        },
        rightClick(){
            this.index++;
            if(this.index>=this.contents.length)
            {
                this.index=this.contents.length-1
            }
        },
        
    }
}
</script>
<style scoped>

.main{
    width:100vw;
    height:100vh;
    display: flex;
    justify-content:center;
}

.left-button{
    width: 10vw;
    height:10vw;
    background-color: aqua;
    position: absolute;
    left:3vw;
    top:40vh;
}

.right-button{
    width: 10vw;
    height:10vw;
    background-color: aqua;
    position: absolute;
    right:3vw;
    top:40vh;
}

.img{
    width: 70vw;
    height:60vw;
    background-color: aqua;
    position: absolute;
    right:15vw;
    left:15vw;
    top:25vh;
}

.des{
    width: 90vw;
    height: 30vw;
    background-color: aqua;
    position: absolute;
    right: 5vw;
    left: 5vw;
    top: 61vh;
    font-size: 0.5em;
    text-indent: 2em;
}

</style>