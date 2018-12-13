<template>
  <div class="">
    <div class="all">
      <h2 class="all-header">Projects</h2>
      <div class="all-projects">
        <div v-for="project in projects" :key="project.name" class="all-project">
          <a class="all-project-url" :href="project.url">
            <div class="all-project-name">
              {{ project.name }}
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {
      projects: [
        {
          name: 'Search',
          url: 'https://search.msu.edu'
        },
        {
          name: 'Maps',
          url: 'https://maps.msu.edu'
        },
        {
          name: 'Qualtrics',
          url: 'https://qualtrics.msu.edu'
        },
        {
          name: 'USearch',
          url: 'https://usearch.msu.edu',
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/styles/global.scss';

.all {
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

  &-projects {
    display: grid;
    grid-template-columns: 1fr;
    @include bp(md) { grid-template-columns: repeat(2, 1fr); }
    @include bp(lg) { grid-template-columns: repeat(3, 1fr); }
    grid-auto-rows: minmax(400px, auto);
    grid-row-gap: 1em;
    grid-column-gap: 1em;
  }

	&-project {

    &-url {
      width: 100%; height: 100%;

      display: flex;
      align-items: flex-end;
      flex-direction: column;
      justify-content: flex-end;

      position: relative;

      &:after {
        content: "";
        display: block;

        height: 100%; width: 100%;

        position: absolute;
      }

      &:hover {
        text-decoration: none;

        &:after {
          background: rgba($dark-purple, .2);
        }
        .all-project-name {
          font-size: 42px;
        }
      }
    }

    &-name {
      font-family: $content;
      font-size: 32px;
      color: $dark-purple;
    }
	}
}

</style>
