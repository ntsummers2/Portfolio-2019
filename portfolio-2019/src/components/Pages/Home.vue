<template>
  <div id="LandingPage">
    <LandingBanner/>
    <Projects/>
  </div>
</template>

<script>
import LandingBanner from '../Shared/LandingBanner'
import Projects from '../Shared/Projects.vue'

import { page } from 'vue-analytics'

export default {
  name: 'LandingPage',
  components: {
    LandingBanner,
    Projects
  },
  methods: {
    track () {
      page('/')
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/styles/global.scss';

</style>
