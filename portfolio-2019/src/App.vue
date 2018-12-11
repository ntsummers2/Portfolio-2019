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

<style>
body, html, #app {
  width: 100%; height: 100%;
}
</style>
