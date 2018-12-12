<template>
  <div :style="{'background-image': 'url(' + require('../assets/images/bannerbackground2.jpg') + ')'}" class="banner">
    <div class="banner-overlay">
      <div class="banner-text-container">
        <h1 class="bold-text">
          <pre>Hey there!
My name's Nick.</pre>
        </h1>
        <p class="descriptive-text">
          <pre>

I'm a fullstack developer thats loves designing and creating new applications and websites that push the envelope and make peoples lives easier.

Speaking of, how can I help you?</pre>
        </p>
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
  height: 90%; width: 100%;
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center;

  &-overlay {
    height: 100%; width: 100%;

    background: #A3F7B5;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, transparent, #A3F7B5);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, rgba(64,201,162, .93) 50%, transparent 50%); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  &-text-container {
    padding: 20px;

    box-sizing: border-box;

    height: 100%; width: 50%;

    display: flex;
    align-items: center;
    flex-direction: column;

    .bold-text {
      margin: 0; padding: 0;

      display: flex;

      height: 50%; width: 100%;

      pre {
        font-family: 'Merriweather', serif;
        font-size: 60px;
        font-weight: bold;
        color: #fff;
        white-space: pre-wrap;

        margin: 0; padding: 0;

        align-self: flex-end;
      }
    }

    .descriptive-text {
      align-self:flex-start;

      margin: 0; padding: 0;

      display: flex;

      height: 50%; width: 100%;

      pre {
        font-family: 'Poppins', sans-serif;
        font-size: 24px;
        color: #fff;
        white-space: pre-wrap;

        margin: 0; padding: 0;

        align-self: flex-start;
      }
    }
  }
}
</style>
