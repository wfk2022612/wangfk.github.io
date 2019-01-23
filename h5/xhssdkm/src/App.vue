<template>
  <div id="app" class="app">
      <div class="flipbook-viewport">
          <div class="container">
            <div id="appFlipbook" class="flipbook">
              <div>
                  <Cover />
              </div>
              <div>
                 <Info />
              </div>
            </div>
          </div>
        </div>
        <!-- <Info /> -->
    <audio preload="preload" id="bgMusic" :src="audioSrc" autoplay="autoplay" loop></audio>
  </div>
</template>

<script>
  import Cover from '@/components/Cover'
  import Info from '@/components/Info'
export default {
  name: "App",
  data() {
    return {
      // audioLoaded:false
    };
  },
  computed: {
    audioSrc() {
      return require("@/assets/music/bg.mp3");
    }
  },
  methods: {
    loaded() {
      console.log("audio loaded");
      // this.audioLoaded=true
    }
  },
  mounted() {
    console.log('app mounted')
    console.log('jquery'+jQuery)

    $('#appFlipbook').turn({
			// Width

			width:$("html").width(),
			
			// Height

			height:$("html").height(),

			// Elevation

			elevation: 50,
			
			// Enable gradients

			gradients: true,
			
			// Auto center this flipbook

			autoCenter: false,
			display:'single',
    when:{
      end(){
        $("#appFlipbook").turn("disable",true);
      }
    }
  });
  
  },
  components:{
    Cover,
    Info
  }
};
</script>


<style>
* {
  padding: 0;
  margin: 0;
}

html {
  font-size: 75px;
  font-family: "Helvetica Neue", "Helvetica", "Microsoft YaHei",
    "\\5FAE\\8F6F\\96C5\\9ED1", arial, sans-serif;
  
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

html,
body {
  height: 100vh;
  -webkit-tap-highlight-color: transparent;
}

img {
  border: none;
  vertical-align: middle;
  height: auto;
}
</style>
