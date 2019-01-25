<template>
	<div class="book">
	<div class="flipbook-viewport">
		<div class="container">
			<div class="flipbook">
				<div>
					<Cover />
				</div>
				<div>
					<Info />
				</div>

			</div>
		</div>
	</div>
</div>
</template>

<script>
import utils from '@/assets/js/Utils.js';
import Cover from '@/components/Cover';
import Info from '@/components/Info';

export default{
	data(){
		return {
			bookPersionIndex:null
		}

	},
    mounted() {
		var _this=	this
		utils.play("bgMusic")

		var bookPersionIndex=null;
		if(this.$route.params["index"]>=0){
			bookPersionIndex=this.$route.params["index"]
		}

		$(function(){
			$('.flipbook').turn({
			// Width

			width:$("html").width(),
			
			// Height

			height:$("html").height(),

			// Elevation

			page:bookPersionIndex>=0?2:1,

			elevation: 50,
			
			// Enable gradients

			gradients: true,
			
			// Auto center this flipbook

			autoCenter: false,
			display:'single',
    when:{
      end(){
        // $("#appFlipbook").turn("disable",true);
      },
      turning: function(event, page, pageObject) {
          
            // // Implementation
            // console.log(event)
            // console.log(page)
            // console.log(pageObject)
        }
    }
  });
		})
        
    },
    components:{
        Cover,
        Info
    }
}

</script>
<style>
.book{
	background-color: white;
	width:100vw;
	height:100vh;
}

.flipbook-viewport{
	overflow:hidden;
	width:100%;
	height:100%;
}

.flipbook-viewport .container{
	/* position:absolute;
	top:50%;
	left:50%; */
	margin:auto;
}

.flipbook-viewport .flipbook{
	width:100vw;
	height:100vh;
	/* left:-461px;
	top:-300px; */
}

.flipbook-viewport .page{
	/* width:461px;
	height:600px; */
	background-color:white;
	background-repeat:no-repeat;
	background-size:100% 100%;
}

.flipbook .page{
	-webkit-box-shadow:0 0 20px rgba(0,0,0,0.2);
	-moz-box-shadow:0 0 20px rgba(0,0,0,0.2);
	-ms-box-shadow:0 0 20px rgba(0,0,0,0.2);
	-o-box-shadow:0 0 20px rgba(0,0,0,0.2);
	box-shadow:0 0 20px rgba(0,0,0,0.2);
}

.flipbook-viewport .page img{
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	margin:0;
}

.flipbook-viewport .shadow{
	-webkit-transition: -webkit-box-shadow 0.5s;
	-moz-transition: -moz-box-shadow 0.5s;
	-o-transition: -webkit-box-shadow 0.5s;
	-ms-transition: -ms-box-shadow 0.5s;

	-webkit-box-shadow:0 0 20px #ccc;
	-moz-box-shadow:0 0 20px #ccc;
	-o-box-shadow:0 0 20px #ccc;
	-ms-box-shadow:0 0 20px #ccc;
	box-shadow:0 0 20px #ccc;
}

</style>