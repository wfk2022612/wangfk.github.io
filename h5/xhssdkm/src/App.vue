<template>
  <div id="app">
    <router-view @loaded="loaded"/>
    <audio ref="music" preload="preload" id="bgMusic" :src="audioSrc" autoplay loop></audio>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  created() {},
  components: {
    // Loading
  },
  computed: {
    audioSrc() {
      return require("@/assets/music/bg.mp3");
    }
  },
  methods: {
    loaded() {
      console.log("loaded");
    }
  }
};
</script>
  <style>
html,
body,
div,
p,
ul,
li,
ol,
dl,
dt,
dd,
header,
footer,
video,
h1,
h2,
h3,
h4,
canvas,
section,
figure {
  padding: 0;
  margin: 0;
  font-size: 75px;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

html,
body {
  height: 100%;
  -webkit-tap-highlight-color: transparent;
}

body {
  font-family: "Helvetica Neue", "Helvetica", "Microsoft YaHei",
    "\\5FAE\\8F6F\\96C5\\9ED1", arial, sans-serif;
}

img {
  border: none;
  vertical-align: middle;
  height: auto;}
</style>
