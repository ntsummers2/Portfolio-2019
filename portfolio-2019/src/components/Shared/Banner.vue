<template>
  <div class="Banner">
    <div class="Banner-Background">
        <picture>
            <source media="(min-width: 1000px)" :srcset="require('@/assets/images/' + project.image + '-1920px.jpg')">
            <source media="(min-width: 600px)" :srcset="require('@/assets/images/' + project.image + '-1000px.jpg')">
            <img :src="require('@/assets/images/' + project.image + '-600px.jpg')" :alt="project.alt">
        </picture>
    </div>
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
    min-height: 500px;

    position: relative;

    padding: 0; margin: 0 0 5px 0;

    &-Background {
        position: absolute;
        top: 0; left: 0; 

        width: 100%; height: 100%;

        img {
            width: 100%; height: 100%;
            object-fit: cover;
            filter: blur(1px);
        }
    }

    &-Container {
        position: absolute;
        top: 0; left: 0; 

        width: 100%; height: 100%;

        align-items: center;
        display: flex;
        flex-flow: column; flex-wrap: wrap;
        justify-content: center;
        
        padding: 100px 16px; margin-bottom: 16px;

        background: rgba($color: $project-banner-background, $alpha: .63);
    }

    &-Title {
        font-family: $heading; font-style: normal; font-weight: 700; font-size: 3em;
        letter-spacing: normal;
        line-height: 1.2;
        text-transform: none; text-align: center;

        color: $project-banner-text;

        padding: 0; margin: 0;
    }

    &-Description {
        font-family: $content; font-style: italic; font-weight: 400; font-size: 1.45em;
        letter-spacing: normal;
        line-height: 1.24;
        text-transform: none; text-align: center;

        color: $project-banner-text;

        padding: 10px 0; margin: 0;
    }

    &-Link {
        font-family: $content; font-style: normal; font-weight: 400; font-size: 1.2em;
        letter-spacing: normal;
        line-height: 1.24;
        text-transform: none; text-align: center;

        padding: 5px 10px; margin: 0;

        background: $project-banner-link;
        color: $dark-blue;
        
        border-radius: 3px;

        &:hover {
            text-decoration: none;
            background: darken($color: $project-banner-link, $amount: 5)
        }
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

            color: $project-banner-link;

            padding: 0; margin: 0;
        }

        p {
            display: inline-block; 
            font-family: $content; font-style: normal; font-weight: 400; font-size: 1.45em;
            letter-spacing: normal;
            line-height: 1.2;
            text-transform: none; text-align: center; text-decoration: underline;

            color: $project-banner-link;

            padding: 0 0 0 8px; margin: 0;

            &:hover {
                text-decoration: none;
            }
        }
    }
}

</style>