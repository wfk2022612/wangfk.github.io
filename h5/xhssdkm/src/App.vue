<template>
  <div id="app">
    <router-view />
  </div>
</template>

  <script>
  import Loading from '@/components/Loading'
  
  export default {
    name: 'App',
    components:{
      Loading
    }
  }
</script>

<style>

html, body, div, p, ul, li, ol, dl, dt, dd, header, footer, video, h1, h2, h3, h4, canvas, section, figure {
	padding: 0;
	margin: 0;
  font-size:10vw;
}

a {
	text-decoration: none;
}

li {
	list-style: none;
}

html, body {
	height: 100%;
	-webkit-tap-highlight-color: transparent;
}

body {
	font-family: "Helvetica Neue", 'Helvetica', "Microsoft YaHei", '\\5FAE\\8F6F\\96C5\\9ED1', arial, sans-serif;
	font-size: 30px;
}

img {
	border: none;
	vertical-align: middle;
	width: 100%;
	height: auto;
}

</style>
