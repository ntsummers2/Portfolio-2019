<template>
  <div id="LandingPage">
    <LandingBanner/>
    <Projects/>
  </div>
</template>

<script>
import LandingBanner from '../Shared/LandingBanner'
import Projects from '../Shared/Projects.vue'

export default {
  name: 'LandingPage',
  components: {
    LandingBanner,
    Projects
  }
}
</script>

<style lang="scss">
@import '../../assets/styles/global.scss';

</style>
