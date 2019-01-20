<template>
    <div>
        <div :style='{background:" #158ae4" }' class='zmiti-loading lt-full'>
            <div class='zmiti-loading-ui'>
                <a href="#">
                    <section class='zmiti-head'
                        :style="{'background-image':'url('+logo+')'}"></section>
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                    <div class='zmiti-progress'>{{progress}}%</div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import config from '@/assets/js/Config.js'

export default {
	name:"loading",
    data(){
        return {
            config:config,
            progress:0,
        }
    },
    computed:{
        logo(){
            
            var img= require('@/assets/images/logo.png');//this.config.imgs
            return img;
        },
        imgs(){
            return this.config.imgs;
        }
    },
    mounted(){
		// localStorage.setItem("autoplay",null)
		console.log('loading mounted')

		// console.log(window.createjs)
		// var manifest=[];
		// var queue = new createjs.LoadQueue(true);
		// queue.installPlugin(createjs.Sound);
		//  queue.on("progress ", (e)=>{
		// 	 debugger
		// 	this.progress=Math.round(e.progress *100)
		//  });
 		// queue.on("complete", (e)=>{
		// 	 debugger
		// 	this.$router.push("./cover")
		//  });

		var imgList=[];
	 
        for(var p in this.imgs){
            if(!(/^data:/ig).test(this.imgs[p])){
				imgList.push(this.imgs[p])
				// manifest.push({id:'imgs.'+p,src:this.imgs[p]})
                console.log(this.imgs[p])
            }else{
				console.log(this.imgs[p]+" loaded ")
			}
		}

		// for(var p in this.config.medias){
		// 	if(!(/^data:/ig).test(this.config.medias[p])){
		// 		imgList.push(this.config.medias[p])
		// 		manifest.push({id:'medias.'+p,src:this.config.medias[p]})
        //         console.log(this.config.medias[p])
        //     }else{
		// 		console.log(this.config.medias[p]+" loaded ")
		// 	}
		// }
		// queue.loadManifest(manifest);
        
        if(imgList.length>0){
            this.loading(imgList,(p)=>{
				this.progress=Math.round( p*100)
				console.log(p)
				},()=>{
				console.log("load finish")
				this.$router.push("./cover")
				// this.$router.push("./info")
				// var checkPlayState=window.setInterval(()=>{
				// 	if(window.audioCanPaly){
				// 		this.$router.push("./cover")
				// 		window.clearInterval(checkPlayState)
				// 	}
				// },100)
                
            })
        }else{
			this.$router.push("./cover")
		}
    },
    methods:{
        loading(arr, fn, fnEnd) {
            var len = arr.length;
            var count = 0;
            var i = 0;
            
            function loadimg() {
                if (i === len) {
                    return;
                }
                
                var img = new Image();
                img.onload = img.onerror = function () {
                    count++;
                    if (i < len - 1) {
                        i++;
                        loadimg();
                        fn && fn(i / (len - 1), img.src);
                    } else {
                        fnEnd && fnEnd(img.src);
                    }
                };
                img.src = arr[i];
            }
            loadimg();
        }
    }
}
</script>
<style scoped>
.lt-full {
	width: 100vw;
	height: 100vh;
	position: absolute;
	left: 0;
	top: 0;
}
/* 
.zmiti-text-overflow {
	overflow: hidden;
	white-space: nowrap;
	word-break: break-all;
	text-overflow: ellipsis;
	-webkit-text-overflow: ellipsis;
}

.zmiti-play {
	width: .8rem;
	height: .8rem;
	border-radius: 50%;
	position: fixed;
	z-index: 1000;
	right: .5rem;
	top: .5rem;
}

.zmiti-play.rotate {
	-webkit-animation: rotate 5s linear infinite;
	animation: rotate 5s linear infinite;
} */

@-webkit-keyframes rotate {
  
	to {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}

.zmiti-loading {
	z-index: 1000;
	position: fixed;
}

.zmiti-loading .zmiti-loading-ui {
	width: 6rem;
	left: 2rem;
	position: absolute;
	top: 6rem;
}

.zmiti-loading .zmiti-loading-ui a {
	text-align: center;
	line-height: 200px;
	color: #fff;
	display: block;
	width: 200px;
	height: 200px;
	position: fixed;
	left: 50%;
	top: 50%;
	border-radius: 50%;
	margin: -100px 0 0 -100px;
    /* -webkit-transform: scale(0.8); 
    transform: scale(0.8); */
    
}

.zmiti-loading .zmiti-loading-ui a .zmiti-head {
	width: 70px;
	height: 70px;
	border-radius: 50%;
	position: absolute;
	top: 50%;
	left: 50%;
	margin-left: -35px;
	margin-top: -35px;
    /* background-position: center;
    background-size: cover;
    background-repeat: no-repeat; */
    background: center center / cover no-repeat;
}

.zmiti-loading .zmiti-loading-ui a .zmiti-progress {
	width: 100%;
	position: relative;
	z-index: 10;
	top: 90px;
}

.zmiti-loading .zmiti-loading-ui a .line1 {
	width: 80px;
	height: 80px;
	position: absolute;
	left: 50%;
	top: 50%;
	margin: -42px 0 0 -42px;
	border: 2px solid #fff;
	border-radius: 80px 80px 80px 80px;
	border-right-color: transparent;
	border-top-color: transparent;
}

.zmiti-loading .zmiti-loading-ui a .line2 {
	width: 100px;
	height: 100px;
	position: absolute;
	left: 50%;
	top: 50%;
	margin: -52px 0 0 -52px;
	border: 2px solid #fff;
	border-radius: 100px 100px 100px 100px;
	border-right-color: transparent;
	border-left-color: transparent;
}

.zmiti-loading .zmiti-loading-ui a .line3 {
	width: 120px;
	height: 120px;
	position: absolute;
	left: 50%;
	top: 50%;
	margin: -62px 0 0 -62px;
	border: 2px solid #fff;
	border-radius: 120px 120px 120px 120px;
	border-right-color: transparent;
}

@-webkit-keyframes line1 {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}

	20% {
		-webkit-transform: rotate(720deg);
		transform: rotate(720deg);
	}

	50% {
		-webkit-transform: rotate(1080deg);
		transform: rotate(1080deg);
	}

	75% {
		-webkit-transform: rotate(1300deg);
		transform: rotate(1300deg);
	}

	100% {
		-webkit-transform: rotate(2500deg);
		transform: rotate(2500deg);
	}
}

@keyframes line1 {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}

	20% {
		-webkit-transform: rotate(720deg);
		transform: rotate(720deg);
	}

	50% {
		-webkit-transform: rotate(1080deg);
		transform: rotate(1080deg);
	}

	75% {
		-webkit-transform: rotate(1300deg);
		transform: rotate(1300deg);
	}

	100% {
		-webkit-transform: rotate(2500deg);
		transform: rotate(2500deg);
	}
}

.zmiti-loading .zmiti-loading-ui a .line1 {
	-webkit-animation: line1 14s ease-in-out 1s infinite alternate;
	animation: line1 15s ease-in-out 1s infinite alternate;
}

@-webkit-keyframes line2 {
	from {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}

	to {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}
}

@keyframes line2 {
	from {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}

	to {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}
}

.zmiti-loading .zmiti-loading-ui a .line2 {
	-webkit-animation: line2 3s ease-in-out infinite;
	animation: line2 3s ease-in-out infinite;
}

@-webkit-keyframes line3 {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}

	20% {
		-webkit-transform: rotate(720deg);
		transform: rotate(720deg);
	}

	50% {
		-webkit-transform: rotate(1080deg);
		transform: rotate(1080deg);
	}

	75% {
		-webkit-transform: rotate(1300deg);
		transform: rotate(1300deg);
	}

	100% {
		-webkit-transform: rotate(2500deg);
		transform: rotate(2500deg);
	}
}

@keyframes line3 {
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}

	20% {
		-webkit-transform: rotate(720deg);
		transform: rotate(720deg);
	}

	50% {
		-webkit-transform: rotate(1080deg);
		transform: rotate(1080deg);
	}

	75% {
		-webkit-transform: rotate(1300deg);
		transform: rotate(1300deg);
	}

	100% {
		-webkit-transform: rotate(2500deg);
		transform: rotate(2500deg);
	}
}

.zmiti-loading .zmiti-loading-ui a .line3 {
	-webkit-animation: line3 20s ease-in-out infinite;
	animation: line3 20s ease-in-out infinite;
}
/* 
.zmiti-loading .zmiti-loading-ui .zmiti-loading-bar {
	width: 2rem;
	border-radius: 10px;
	position: relative;
	margin: 0 auto;
}

.zmiti-loading .zmiti-loading-ui .zmiti-loading-bar:before {
	content: '';
	border-radius: 10px;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	box-shadow: 0 0 3px rgba(255, 255, 255, 0.5);
}

.zmiti-loading .zmiti-loading-ui .zmiti-loading-bar .zmiti-target {
	width: 0.4rem;
	height: 0.4rem;
	border-radius: 50%;
	background: #fff;
	left: 50%;
	top: .4rem;
	position: absolute;
	margin-left: -0.2rem;
	-webkit-animation: scale linear 2s infinite alternate;
	animation: scale linear 2s infinite alternate;
} */

.zmiti-loading .zmiti-loading-ui .zmiti-progress {
	margin-top: .5rem;
	text-align: center;
	color: #fff;
	font-family: Georgia;
	font-size: 0.8rem;
}

/* .zmiti-mask {
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.6);
	z-index: 300;
	text-align: right;
}

.zmiti-mask img {
	width: 6rem;
	margin-right: 20px;
} */

/* @-webkit-keyframes scale {
	from {
		-webkit-transform: scale(0.96) translateZ(1px);
	}

	to {
		-webkit-transform: scale(1.04) translateZ(1px);
	}
} */

</style>