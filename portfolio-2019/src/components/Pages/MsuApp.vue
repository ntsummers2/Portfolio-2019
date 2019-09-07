<template>
  <div class="MsuApp">
    <Banner v-bind:project="msuAppData.banner"/>
    <main>
      <MainContent v-bind:project="msuAppData.description"/>
      <Sidebar v-bind:project="msuAppData.sidebar"/>
    </main>
  </div>
</template>

<script>
import Banner from '../Shared/Banner.vue'
import MainContent from '../Shared/MainContent.vue'
import Sidebar from '../Shared/Sidebar.vue'
import msuAppData from '../../assets/resources/MsuApp.json'

export default {
  name: 'MsuApp',
  components: {
    Banner,
    MainContent,
    Sidebar
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
  grid-template-columns: 2fr 1fr;
}
</style>