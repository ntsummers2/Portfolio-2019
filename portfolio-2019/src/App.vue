<template>
  <div id="app">
    <LandingBanner/>
  </div>
</template>

<script>
import LandingBanner from './components/LandingBanner.vue'

export default {
  name: 'app',
  components: {
    LandingBanner
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Merriweather|Poppins');
@import 'assets/styles/global.scss';

#app {
  width: 100%; height: 100%;
}
</style>
