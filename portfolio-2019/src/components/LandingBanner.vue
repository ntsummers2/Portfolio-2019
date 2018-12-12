<template>
  <div :style="{'background-image': 'url(' + require('../assets/images/bannerbackground2.jpg') + ')'}" class="banner">
    <div class="banner-overlay">
      <div class="banner-text-container">
        <div class="banner-text">
          <div class="bold">
            <h1 class="bold-text">Hey there!</h1>
            <h1 class="bold-text">My names Nick.</h1>
          </div>
          <p class="descriptive-text">I'm a fullstack developer thats loves designing and creating new applications and websites that push the envelope and make peoples lives easier. Speaking of, how can I help you?</p>
        </div>
      </div>
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
.banner {
  height: 100%; width: 100%;
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center;

  &-overlay {
    height: 100%; width: 100%;

    background: #A3F7B5;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, transparent, #A3F7B5);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, rgba(64,201,162, .9) 50%, transparent 50%); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  &-text-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100vh;

    padding: 20px;

    .banner-text {
      display: flex;
      align-items: center;
      flex-flow: row wrap;
      position: relative;
    }

    .bold {
      align-self: flex-end;

      &-text {
        font-family: 'Merriweather', serif;
        font-size: 60px;
        font-weight: bold;
        color: #fff;

        margin: 0; padding: 0;
      }
    }

    .descriptive-text {
      align-self:flex-start;

      font-family: 'Poppins', sans-serif;
      font-size: 24px;
      color: #fff;

      margin: 15px 0 0 0; padding: 0;
    }
  }
}
</style>
