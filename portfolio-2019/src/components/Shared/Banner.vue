<template>
  <div class="Banner">
    <div class="Banner-Background" v-bind:src="'../../assets/images/' + project.image" :alt="project.alt">
        <div class="Banner-Container">
            <h1 class="Banner-Title">{{ project.title }} </h1>
            <h3 class="Banner-Description">{{ project.description }} </h3>
            <a class="Banner-Link" :href="project.url"> Check it out here! </a>
        </div>
        <div class="Banner-Return">
            <router-link to="/">
                <font-awesome-icon :icon="['fas', 'arrow-left']"/>
                <p>Home</p>
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
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

.Banner {
    height: 100%; width: 100%;

    position: relative;

    padding: 0; margin: 0 0 30px 0;

    &-Container {
        align-items: center;
        display: flex;
        flex-flow: column; flex-wrap: wrap;
        justify-content: center;
        
        padding: 100px 16px; margin-bottom: 16px;

        min-height: 500px;

        background: rgba($color: #000000, $alpha: .1);
    }

    &-Title {
        font-family: $heading; font-style: normal; font-weight: 700; font-size: 3em;
        letter-spacing: normal;
        line-height: 1.2;
        text-transform: none; text-align: center;

        color: #000;

        padding: 0; margin: 0;
    }

    &-Description {
        font-family: $content; font-style: italic; font-weight: 400; font-size: 1.45em;
        letter-spacing: normal;
        line-height: 1.24;
        text-transform: none; text-align: center;

        padding: 10px 0; margin: 0;
    }

    &-Link {
        font-family: $content; font-style: normal; font-weight: 200; font-size: 1.2em;
        letter-spacing: normal;
        line-height: 1.24;
        text-transform: none; text-align: center;

        padding: 0; margin: 0;
    }

    &-Return {
        position: absolute;
        top: 16px; left: 16px;

        display: block; 

        svg {
            font-size: 1.45em;
            letter-spacing: normal;
            line-height: 1.2;
            text-transform: none; text-align: center;

            color: #000;

            padding: 0; margin: 0;
        }

        p {
            display: inline-block; 
            font-family: $content; font-style: normal; font-weight: 400; font-size: 1.45em;
            letter-spacing: normal;
            line-height: 1.2;
            text-transform: none; text-align: center;

            color: #000;

            padding: 0 0 0 8px; margin: 0;
        }
    }
}

</style>