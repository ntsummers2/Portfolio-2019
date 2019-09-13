<template>
  <div class="Maps">
    <Banner v-bind:project="mapsData.banner"/>
    <main>
      <TopBar v-bind:project="mapsData.topbar"/>
      <MainContent v-bind:project="mapsData.description"/>
    </main>
  </div>
</template>

<script>
import Banner from '../Shared/Banner.vue'
import MainContent from '../Shared/MainContent.vue'
import TopBar from '../Shared/TopBar.vue'
import mapsData from '../../assets/resources/Maps.json'

import { page } from 'vue-analytics'

export default {
  name: 'Maps',
  components: {
    Banner,
    MainContent,
    TopBar
  },
    methods: {
    track () {
      page('/maps')
    }
  },
  data () {
    return {
      mapsData: mapsData
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../assets/styles/global.scss';

.Maps {
  min-height: 100%; min-width: 100%;
}

main {
  width: 100%;
  max-width: 1100px;

  margin: 0 auto;

  display: grid;
  grid-template-rows: 1fr;
}
</style>