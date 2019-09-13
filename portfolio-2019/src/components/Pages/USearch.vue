<template>
  <div class="USearch">
    <Banner v-bind:project="usearchData.banner"/>
    <main>
      <TopBar v-bind:project="usearchData.topbar"/>
      <MainContent v-bind:project="usearchData.description"/>
    </main>
  </div>
</template>

<script>
import Banner from '../Shared/Banner.vue'
import MainContent from '../Shared/MainContent.vue'
import TopBar from '../Shared/TopBar.vue'
import USearch from '../../assets/resources/USearch.json'

import { page } from 'vue-analytics'

export default {
  name: 'USearch',
  components: {
    Banner,
    MainContent,
    TopBar
  },
  methods: {
    track () {
      page('/usearch')
    }
  },
  data () {
    return {
      usearchData: USearch
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../assets/styles/global.scss';

.USearch {
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