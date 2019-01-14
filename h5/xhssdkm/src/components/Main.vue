<template>
    <div class="main" :style="{'background-image':detailBg}">

        <div class="top">
            top
        </div>

        <div class="middle">
            <div class="left-button" @click="leftClick">
          
               &lt;
            
               
            </div>
            <div class="content">
                <img class="pic" :src="current.img">
                <div class="title">tip</div>
            </div>
            <div class="right-button" @click="rightClick">
                  
                    &gt;
             
            </div>
        </div>

        <div class="bottom">
            <div class="des">
                {{current.des}}
            </div>
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
        },
        detailBg(){
            return 'url('+ this.config.imgs.detailBg+')'
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
    justify-content:flex-start;
    flex-direction: column
}

.top{
    width:100vw;
    height:25vh;
}

.middle{
    width:100vw;
    /* height: 50vh; */
    display: flex;
    flex-direction: row;
    align-items: center;
}

.middle .left-button{
    width:10vw;
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow:1;
}

.middle .content{
    width:80vw;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: end;
    flex-grow:1;
}

.middle .right-button{
    width:10vw;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow:1;
}

.bottom{
    width:100vw;
    /* height:45vh; */
}

.pic {  
    width: 90%;  
    background: #ead7a4;  
    padding: 10px;  
    position: relative;
    margin: 0 auto;
}

.pic:before {  
    content: '';  
    position: absolute;  
    width: 100%;  
    height: 100%;  
    left: 0;  
    top: 0;  
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
}

.content .title{
    height: 1.4em;
    overflow: hidden;
    background-color: black;
    color: white;
    font-size: 0.5em;
    width: 70vw;
    margin: 0 auto;
    margin-top: -2em;
    z-index: 1;
}

</style>