<template>
  <div class="MainContent">
    <div v-for="paragraph in project.paragraphs" :key="paragraph" class="MainContent-Content">
      <p class="MainContent-Text"> {{ paragraph.content }} </p> 
      <img v-if="paragraph.image" :src="require('@/assets/images/' + paragraph.image.src)" :alt="project.alt">
      <p class="MainContent-Subtitle" v-if="paragraph.image"> {{ paragraph.image.subtitle }} </p>
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

  padding: 0px 15px; margin: 0;

  &-Text {
    font-family: $content; font-style: normal; font-weight: 200; font-size: 1.1em;
    letter-spacing: normal;
    line-height: 1.2;
    color: #333;
  }

  img {
    width: 100%;
    object-fit: cover;

    margin: 0 auto;
  }

  &-Subtitle {
    font-family: $content; font-style: italic; font-weight: 200; font-size: .9em;
    letter-spacing: normal;
    line-height: 1;
    color: #333;

    margin: 0; padding: 3px 0; 
    
    border-bottom: 1px solid #8AB0AB;
  }
}

</style>
