<template>
    <div @click="entry" class="lt-full zmiti-index-main-ui"
        :style="{background:'url('+imgs.indexBg+') no-repeat center top',backgroundSize:'cover'}" :class="{'show':show}">
        <transition name='index'>
            <div class="zmiti-index" v-if='!showIndexMask'>
                <div class="zmiti-title">
                    <img @touchstart='imgStart' :src="imgs.title1">
                </div>
                <div class="zmiti-index-img"
                    :style="{WebkitTransform:'translateX('+transX+'px)'}">
                    <img :src="imgs.index" alt="">
                </div>
                <div class="zmiti-entry">
                    <img :src="imgs.entry" alt="">
                </div>

                <canvas :width="viewW" height="500" ref='canvas'>

                </canvas>
            </div>
        </transition>

        <!-- <transition name='video'>
            <div class="zmiti-video lt-full" v-show='showVideo'>
                <video
                    id="my_video" ref='video'
                    style="object-fit: fill; width: 100%; height: 100%;"
                    preload="load" playsinline="true" webkit-playsinline="true"
                    x-webkit-airplay="allow" airplay="allow"
                    x5-video-player-type="h5"
                    :x5VideoPlayerFullscreen="fullscreen"
                    x5-video-orientation="portrait"
                    :loop='false'
                    :src="vidoeUrl"></video>

            </div>
        </transition> -->

        <div class="zmiti-index-logo">
            <img :src="imgs.logo" alt="">
        </div>
    </div>
</template>

<script>
import config from '@/assets/js/Config.js'
import Point from '@/assets/js/Point.js'

export default{
		name: 'cover',
		data: function data() {
			return {
                config,
				
				pointW: 0,
				pointH: 0,
				points: [],
				show: true,
				showIndexMask: false,
				showMasks: false,
				transX: -200,
				showVideo: false,
				viewW: window.innerWidth,
				fullscreen: true,
				vidoeUrl: ''
			};
        },
        computed:{
            imgs(){
                return config.imgs;
            }
        },
		components: {},

		methods: {

			imgStart: function imgStart(e) {
				e.preventDefault();
			},

			entry() {
				var audio=document.getElementById("bgMusic")
				audio.play();
				var _this = this;
				this.showIndexMask = true;
                this.showVideo = false;
                this.$router.push("/info")
			},

			initPoints: function initPoints() {
				var _this2 = this;
                var config=this.config
				var canvas = this.$refs['canvas'];
				var context = canvas.getContext('2d');

				var width = canvas.width,
				    height = canvas.height;
				var img = new Image();
				img.onload = function () {
					for (var i = 0; i < 100; i++) {
                        
						var p = new Point({
							img: img,
							context: context
						});
						_this2.points.push(p);
					}
                };
                
				img.src = config.imgs.point;

				var animationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame,
				    m = Math;

				var render = function render() {
					if (width <= 0) {
						width = canvas.width, height = canvas.height;
					}
					context.clearRect(0, 0, width, height);

					_this2.points.map(function (point, i) {
						point.angle += point.speed;
						//point.angle = (point.angle | 0)
						point.angle %= 360;
						point.x += m.sin(point.angle / 180 * m.PI) * point.speedX;

						point.y -= 1;
						if (point.defaultY - point.y > point.maxHeight) {
							point.y = point.defaultY;
						}
						point.update();
					});
					!_this2.showIndexMask && animationFrame(render);
				};

				render();
			}

		},
		mounted: function mounted() {
			this.initPoints();
			if(window.canPlayAudio){
				var audio=document.getElementById("bgMusic")
				
				audio.play();
			}
		}
    }
    
</script>

<style scoped>
.lt-full {
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
}

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
}

@-webkit-keyframes rotate {
	to {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}

.zmiti-index-main-ui {
	overflow: hidden;
	width: 10rem;
	left: 50% !important;
	margin-left: -375px;
	background: #4081dd;
	opacity: 0;
	z-index: -1;
}

.zmiti-index-main-ui.show {
	opacity: 1;
	z-index: 200;
}

.zmiti-index-main-ui .zmiti-title {
	position: absolute;
	width: 100vw;
	left: 50%;
	top: 24vh;
	z-index: 10;
	-webkit-transform: translate3d(-50%, 0, 0);
	transform: translate3d(-50%, 0, 0);
}

.zmiti-index-main-ui .zmiti-index-img {
	position: absolute;
	bottom: 0;
	left: -200px;
	z-index: 8;
	height: 70vh;
	-webkit-transition: -webkit-transform 0.2s;
	transition: transform 0.2s;
}

.zmiti-index-main-ui .zmiti-index-img img {
	width: auto;
	height: 100%;
}

.zmiti-index-main-ui .zmiti-index.index-enter-active, .zmiti-index-main-ui .zmiti-index.index-leave-active {
	-webkit-transition: 1s;
	transition: 1s;
}

.zmiti-index-main-ui .zmiti-index.index-enter, .zmiti-index-main-ui .zmiti-index.index-leave-to {
	opacity: 0;
}

.zmiti-index-main-ui .zmiti-index canvas {
	position: absolute;
	bottom: 100px;
	z-index: 10;
}

.zmiti-index-main-ui .zmiti-mask {
	z-index: 6;
}

.zmiti-index-main-ui .zmiti-mask.mask-enter-active, .zmiti-index-main-ui .zmiti-mask.mask-leave-active {
	-webkit-transition: 1s;
	transition: 1s;
}

.zmiti-index-main-ui .zmiti-mask.mask-enter, .zmiti-index-main-ui .zmiti-mask.mask-leave-to {
	opacity: 0;
}

.zmiti-index-main-ui .zmiti-video {
	z-index: 10;
}

.zmiti-index-main-ui .zmiti-index-logo {
	width: 180px;
	position: absolute;
	bottom: 40px;
	right: 40px;
	z-index: 9;
}

.zmiti-index-main-ui .zmiti-entry {
	width: 5rem;
	text-align: center;
	line-height: .9rem;
	border-radius: 30px;
	position: absolute;
	left: 2.5rem;
	bottom: 3rem;
	z-index: 10;
	-webkit-animation: scale 1s linear infinite alternate;
	animation: scale 1s linear infinite alternate;
}

@-webkit-keyframes rotate1 {
	to {
		-webkit-transform: rotate(360deg) scale(2);
		transform: rotate(360deg) scale(2);
		opacity: 0;
	}
}

.zmiti-loading {
	z-index: 1000;
}

.zmiti-loading .zmiti-loading-ui {
	width: 6rem;
	left: 2rem;
	position: absolute;
	top: 6rem;
}

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
}

.zmiti-loading .zmiti-loading-ui .zmiti-progress {
	margin-top: .5rem;
	text-align: center;
	color: #fff;
	font-family: Georgia;
	font-size: .7rem;
}
</style>