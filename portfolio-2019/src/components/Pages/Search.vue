<template>
  <div class="Search">
    <Banner v-bind:project="searchData.banner"/>
    <main>
      <TopBar v-bind:project="searchData.topbar"/>
      <MainContent v-bind:project="searchData.description"/>
    </main>
  </div>
</template>

<script>
import Banner from '../Shared/Banner.vue'
import MainContent from '../Shared/MainContent.vue'
import TopBar from '../Shared/TopBar.vue'
import searchData from '../../assets/resources/Search.json'

import { page } from 'vue-analytics'

export default {
  name: 'Search',
  components: {
    Banner,
    MainContent,
    TopBar
  },
  methods: {
    track () {
      page('/search')
    }
  },
  data () {
    return {
      searchData: searchData
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../assets/styles/global.scss';

.Search {
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