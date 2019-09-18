<template>
  <div class="Qualtrics">
    <Banner v-bind:project="qualtricsData.banner"/>
    <main>
      <TopBar v-bind:project="qualtricsData.topbar"/>
      <MainContent v-bind:project="qualtricsData.description"/>
    </main>
  </div>
</template>

<script>
import Banner from '../Shared/Banner.vue'
import MainContent from '../Shared/MainContent.vue'
import TopBar from '../Shared/TopBar.vue'
import qualtricsData from '../../assets/resources/Qualtrics.json'

export default {
  name: 'Qualtrics',
  components: {
    Banner,
    MainContent,
    TopBar
  },
  data () {
    return {
      qualtricsData: qualtricsData
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../assets/styles/global.scss';

.Qualtrics {
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