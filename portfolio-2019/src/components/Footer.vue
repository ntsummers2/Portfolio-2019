<template>
  <div class="footer">
    <div class="footer-note">
      <p>Created using VueJS and Sass.</p>
      <p>Want to dig into the code? You can find me and the associated repo on Github!</p>
    </div>
    <ul class="social-sites">
      <li v-for="site in sites" :key="site.name" class="social-site">
        <a class="social-site-url" :href="site.url">
          <div class="social-site-name">
            <font-awesome-icon :icon="['fab', site.icon]" />
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      sites: [
        {
          name: 'Github',
          url: 'https://search.msu.edu',
          icon: 'github'
        },
        {
          name: 'CodePen',
          url: 'https://maps.msu.edu',
          icon: 'codepen'
        },
        {
          name: 'LinkedIn',
          url: 'https://qualtrics.msu.edu',
          icon: 'linkedin'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/styles/global.scss';

.footer {
  background: $footer-background;
  color: #fff;

  &-note {
    max-width: 1200px;
    margin: 0 auto; padding: 0;

    text-align: left;

    p {
      margin: 0 auto; padding: 0;
    }
  }
}

.social-sites {
  list-style-type: none;

  padding: 0; margin: 0 auto;

  font-size: 32px;

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 40px 40px 40px;
  max-width: 1200px;
}

</style>
