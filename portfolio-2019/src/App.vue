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
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Merriweather:400,700|Poppins:200,400');
@import 'assets/styles/global.scss';

#app {
  width: 100%; height: 100%;
}
</style>
