<template>
  <div id="app" class="app">
      <router-view />
      <audio preload="preload" id="bgMusic" :src="audioSrc" style="display:none" loop></audio>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    audioSrc() {
      return require("@/assets/music/bg.mp3");
    }
  },
  mounted() {
    console.log('app mounted')
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
  overflow:hidden;
	background-color:#fcfcfc;
	margin:0;
	padding:0;
}

img {
  border: none;
  vertical-align: middle;
  height: auto;
}

#app{
  z-index: 10;
  position: absolute;
  background-color:#fcfcfc;
width:100vw;
height:100vh;
}

#app video{
  width: 100vw;
  height: 100vh;
  object-fit: fill;
    position: absolute;
    top: 0;
}
</style>
