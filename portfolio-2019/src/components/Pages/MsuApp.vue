<template>
  <div class="MsuApp">
    <Banner v-bind:project="msuAppData.banner"/>
    <main>
      <TopBar v-bind:project="msuAppData.topbar"/>
      <MainContent v-bind:project="msuAppData.description"/>
    </main>
  </div>
</template>

<script>
import Banner from '../Shared/Banner.vue'
import MainContent from '../Shared/MainContent.vue'
import TopBar from '../Shared/TopBar.vue'
import msuAppData from '../../assets/resources/MsuApp.json'

export default {
  name: 'MsuApp',
  components: {
    Banner,
    MainContent,
    TopBar
  },
  data () {
    return {
      msuAppData: msuAppData
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../assets/styles/global.scss';

.MsuApp {
  min-height: 100%; min-width: 100%;
}

main {
  width: 100%;
  max-width: 1100px;

  margin: 0 auto;

  display: grid;
  grid-template-rows: 1fr 1fr;
}
</style>