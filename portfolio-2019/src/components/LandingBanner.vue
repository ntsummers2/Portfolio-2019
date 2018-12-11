<template>
  <div class="banner">
    <h1 style="text-align:center; font-size:60px; margin: 0; padding: 0; color: #fff;">Hello World</h1>
  </div>
</template>

<script>
export default {
  name: 'LandingBanner',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.banner {
  height: 100%; width: 100%;

  background: #8360c3;  /* fallback for old browsers */
  background: -webkit-linear-gradient(315deg, #2ebf91, #8360c3);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(315deg, #2ebf91, #8360c3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
