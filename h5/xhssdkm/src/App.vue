<template>
  <div id="app" class="app">
    <router-view/>
    <audio ref="audio" id="bgMusic" src="@/assets/music/bg.mp3" autoplay loop>
    </audio>
  </div>
</template>


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
