<template>
  <div id="LandingPage">
    <LandingBanner/>
    <Projects/>
    <Talks/>
  </div>
</template>

<script>
import LandingBanner from '../Shared/LandingBanner'
import Projects from '../Shared/Projects.vue'
import Talks from '../Shared/Talks.vue'

export default {
  name: 'LandingPage',
  components: {
    LandingBanner,
    Projects,
    Talks
  }
}
</script>

<style lang="scss">
@import '../../assets/styles/global.scss';

</style>
