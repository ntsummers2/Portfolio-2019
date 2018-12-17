<template>
  <div class="">
    <div class="social">
      <h2 class="social-header">Social Websites</h2>
      <div class="social-sites">
        <div v-for="site in sites" :key="site.name" class="social-site">
          <a class="social-site-url" :href="site.url">
            <div class="social-site-name">
              <font-awesome-icon :icon="['fab', site.icon]" />
              <p>{{ site.name }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Social',
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

.social {
  padding: 20px;
  @include bp(md) { padding: 20px 40px; }

	&-header {
		margin: 0; padding: 40px 0;

    font-family: $heading;
    font-size: 32px;
    @include bp(sm) { font-size: 48px; }
    @include bp(md) { font-size: 60px; }
		letter-spacing: 0;
    color: $dark-purple;
	}

  &-sites {
    display: grid;
    grid-template-columns: 1fr;
    @include bp(md) { grid-template-columns: repeat(2, 1fr); }
    @include bp(lg) { grid-template-columns: repeat(3, 1fr); }
    grid-auto-rows: minmax(400px, auto);
    grid-row-gap: 1em;
    grid-column-gap: 1em;
  }

	&-site {

    &-url {
      width: 100%; height: 100%;

      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      position: relative;

      &:after {
        content: "";
        display: block;

        height: 100%; width: 100%;

        position: absolute;
      }

      &:hover {
        text-decoration: none;

        .all-project-name {
          font-size: 42px;
        }
      }

      svg {
        font-size: 100px;
      }
    }

    &-name {
      font-family: $content;
      font-size: 32px;
      color: $dark-purple;
      text-align: center;
    }
	}
}

</style>
