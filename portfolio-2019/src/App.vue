<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}

//Sets up google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-83196357-1', 'auto');
ga('send', 'pageview');
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Merriweather:400,700|Poppins:200,400');
@import 'assets/styles/global.scss';

#app {
  width: 100%; height: 100%;
}
</style>
