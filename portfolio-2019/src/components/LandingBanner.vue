<template>
  <div class="banner">
    <div class="banner-overlay">
      <div class="banner-text-container">
        <h1 class="bold-text">
          <pre><span>Hey there!
My name's Nick.</span></pre>
        </h1>
        <p class="descriptive-text">
          <pre>

<span>I'm a fullstack developer thats loves designing and creating new applications and websites that push the envelope and make peoples lives easier.

Speaking of, how can I help you?</span></pre>
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
@import '../assets/styles/global.scss';

.banner {
  height: 100%; width: 100%;
  @include bp(lg) { height: 90%; width: 100%; }

  background-image: url('../assets/images/bannerbackground2.jpg');
  background-repeat:no-repeat;
  background-size:cover;
  background-position:center;

  &-overlay {
    height: 100%; width: 100%;
    background: transparent;

    @include bp(lg) {
      background: $green;  /* fallback for old browsers */
      background: -webkit-linear-gradient(right, $green-transparent 50%, transparent 50%);
      background: -o-linear-gradient(right, $green-transparent 50%, transparent 50%);
      background: linear-gradient(to right, $green-transparent 50%, transparent 50%);  /* Chrome 10-25, Safari 5.1-6 */ /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    }
  }

  &-text-container {
    padding: 20px;
    @include bp(md) { padding: 20px 40px; }

    box-sizing: border-box;

    height: 100%; width: 100%;
    @include bp(sm) { width: 66.666%; }
    @include bp(lg) { width: 50%; }

    display: flex;
    align-items: center;
    flex-direction: column;

    .bold-text {
      margin: 0; padding: 0;

      display: flex;

      height: 50%; width: 100%;

      pre {
        font-family: $heading;
        font-size: 32px;
        @include bp(sm) { font-size: 48px; }
        @include bp(md) { font-size: 60px; }
        font-weight: bold;
        color: #fff;
        white-space: pre-wrap;

        margin: 0; padding: 0;

        align-self: flex-end;

        span {
          background-color: $green-transparent;
          @include bp(lg) { background-color: transparent; }
        }
      }
    }

    .descriptive-text {
      align-self:flex-start;

      margin: 0; padding: 0;

      display: flex;

      height: 50%; width: 100%;

      pre {
        font-family: $content;
        font-size: 16px;
        @include bp(sm) { font-size: 20px; }
        @include bp(md) { font-size: 24px; }
        color: #fff;
        white-space: pre-wrap;

        margin: 0; padding: 0;

        align-self: flex-start;

        span {
          background-color: $green-transparent;
          @include bp(lg) { background-color: transparent; }
        }
      }
    }
  }
}
</style>
