<template>
  <div class="MainContent">
    <div v-for="paragraph in project.paragraphs" :key="paragraph" class="MainContent-Content">
      <p> {{ paragraph.content }} </p> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainContent',
  props: ['project'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../assets/styles/global.scss';

.MainContent {
  height: 100%; width: 100%;

  padding: 15px; margin: 0;
}

</style>
