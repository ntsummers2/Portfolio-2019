<template>
  <div id="app">
    <LandingBanner/>
    <Projects/>
  </div>
</template>

<script>
import LandingBanner from './components/LandingBanner.vue'
import Projects from './components/Projects.vue'

export default {
  name: 'app',
  components: {
    LandingBanner,
    Projects
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
