<template>
  <div class="banner">
    <div class="banner-overlay">
      <div class="banner-text-container">
        <h1 class="bold-text">
          <pre><span>Hey there!
I'm Nick.</span></pre>
        </h1>
        <p class="descriptive-text">
          <pre>

<span>I'm a full-stack developer who is in love with creating websites and applications that involve making people's lives easier.</span></pre>
        </p>
      </div>
    </div>
    <div class="banner-side"></div>
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
@import '../../assets/styles/global.scss';

.banner {
  height: 100%; width: 100%;
  max-height: 670px;
  @include bp(sm) { height: 670px; }

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 1fr;
  @include bp (md) { 
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr;
  }
  background-color: $dark-blue;

  &-side {
    width: 100%; height: 100%;
    max-width: 670px;

    margin: 0 auto;

    order: 1;
    @include bp(md) { order: 2; }

    background-color: $dark-blue;
    background-image: url('../../assets/images/me-400px.png');
    @include bp(lg) { background-image: url('../../assets/images/me-800px.png');}
    background-repeat:no-repeat;
    background-size: contain;
    background-position:center;
  }

  &-overlay {
    height: 100%; width: 100%;
    background: $banner-background;

    order: 2;
    @include bp(md) { order: 1; }
  }

  &-text-container {
    padding: 20px;
    @include bp(md) { padding: 20px 40px; }

    box-sizing: border-box;

    height: 100%; width: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;

    .bold-text {
      margin: 0; padding: 0;

      display: flex;

      height: auto; width: 100%;
      @include bp(md) { height: 33.3333%; }
      @include bp(lg) { height: 50%; }

      pre {
        font-family: $heading;
        font-size: 32px;
        @include bp(md) { font-size: 42px; }
        @include bp(lg) { font-size: 48px; }
        @include bp(xlg) { font-size: 60px; }
        font-weight: bold;
        color: #fff;
        white-space: pre-wrap;

        margin: 0; padding: 0;

        align-self: flex-end;

        span {
          color: $banner-text;
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
          color: $banner-text;
        }
      }
    }
  }
}
</style>
