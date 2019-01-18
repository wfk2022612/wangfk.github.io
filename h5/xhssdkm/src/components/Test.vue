<template>
    <div>
        <audio ref="audio" :src="src1" preload="metadata" autoplay id="test1" ></audio>
        <div>
src1:{{src1}}
        </div>

        <img ref="imgposter" :src="config.imgs.c1" @click="clickPoster($event)">
       
            {{config.medias.video}}      
            
            <div>
                <button @click="getOffset">getOffset</button>
            </div>
    </div>
</template>

<script>
import config from "@/assets/js/Config.js";
export default {
    data(){
        return {
            config
        };
    },
    computed:{
        src1(){
            return config.medias.bg2
        },
        state(){
           return this.$ref["audio"].paused?"暂停":"播放"
        }
    },
    mounted(){
        //this.$ref["audio"].play();
        document.getElementById("bvi").play();
        $("#app").one("click",function(){
            document.getElementById("bvi").play();
        })
    },
    methods:{
        getOffset(){
            return JSON.stringify(  $(this.$refs["imgposter"]).offset())
        },
        clickPoster(e){
            console.log($(e.srcElement).offset())
            console.log($(e.srcElement).outerHeight())
            console.log($(e.srcElement).outerWidth())
            $("#bvi").css({position:'absolute','object-fit':'cover', top:$(e.srcElement).offset().top,left:$(e.srcElement).offset().left,width:$(e.srcElement).outerWidth(),height:$(e.srcElement).outerHeight()})
            document.getElementById("bvi").src=config.medias.video;
            document.getElementById("bvi").play();
        }
    }
}

</script>
