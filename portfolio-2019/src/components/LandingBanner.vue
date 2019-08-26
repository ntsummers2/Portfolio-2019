<template>
  <div class="banner">
    <div class="banner-background">
      <h1> NTS </h1>
    </div>
    <div class="banner-header">
      <h1> Nicholas Summers </h1>
      <p> Web Developer • App Developer • Designer • Burrito Lover</p>
    </div>
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
@import '../assets/styles/global.scss';

.banner {
  position: relative;
  width: 100%; height: 85vh;

  background: #0F2027;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  overflow: hidden;

  &-header {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);

    text-align: center;
    color: #fff;

    h1 {
    }

    p {

    }
  }

  &-background {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);

    text-align: center;

    color: #2C5364;
    font-size: 65vh;

    overflow: hidden;
  }
}
</style>
