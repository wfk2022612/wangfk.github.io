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
export default{
		name: 'cover',
		data: function data() {
			return {
                config:require( '@/assets/js/Config.js'),
				
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
				var _this = this;
				this.showIndexMask = true;
                this.showVideo = false;
                this.$router.push("/main")
			},

			initPoints: function initPoints() {
				var _this2 = this;

				var canvas = this.$refs['canvas'];
				var context = canvas.getContext('2d');

				var width = canvas.width,
				    height = canvas.height;
				var img = new Image();
				img.onload = function () {
					for (var i = 0; i < 100; i++) {
						var p = new _point2['default']({
							img: img,
							context: context
						});
						_this2.points.push(p);
					}
				};
				img.src = _libAssetsJs.imgs.point;

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
			//this.initPoints();
		}
    }
    
</script>