<template>
  <div class="all">
    <h2 class="all-header">Projects</h2>
    <div class="all-projects">
      <div v-for="project in projects" :key="project.name" class="all-project">
        <router-link class="all-project-url" :to="project.url" v-bind:project="project">
          <font-awesome-icon class="all-project-icon" :icon="[project.type, project.icon]" />
          <div class="all-project-name">{{ project.name }} </div>
        </router-link>
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
          name: 'MSU App',
          url: '/msuapp',
          type: 'fab',
          icon: 'apple'
        },
        {
          name: 'Maps',
          url: '/maps',
          type: 'fas',
          icon: 'map'
        },
        {
          name: 'Qualtrics',
          url: '/qualtrics',
          type: 'fas',
          icon: 'vote-yea'
        },
        {
          name: 'Search',
          url: '/search',
          type: 'fas',
          icon: 'search'
        },
        {
          name: 'USearch',
          url: '/usearch',
          type: 'fas',
          icon: 'search-plus'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../../assets/styles/global.scss';

.all {
  padding: 20px;
  @include bp(md) { padding: 20px 40px; }

  background: $background;

	&-header {
    max-width: 1100px;

    padding: 20px; margin: 0 auto;

    font-family: $heading;
    font-size: 32px;
    @include bp(md) { font-size: 42px; }
    @include bp(lg) { font-size: 48px; }
    @include bp(xlg) { font-size: 60px; }
    letter-spacing: 0;
    
    color: $header;
	}

  &-projects {
    display: grid;
    grid-template-columns: 1fr;
    @include bp(sm) { grid-template-columns: repeat(2, 1fr); }
    @include bp(md) { grid-template-columns: repeat(3, 1fr); }
    @include bp(lg) { grid-template-columns: repeat(4, 1fr); }
    grid-auto-rows: minmax(200px, auto);
    @include bp(md) { grid-auto-rows: minmax(300px, auto); }
    @include bp(lg) { grid-auto-rows: minmax(300px, auto); }
    grid-row-gap: 3em;
    grid-column-gap: 3em;

    max-width: 1100px;

    padding: 20px; margin: 0 auto;
  }

	&-project {

    &-url {
      width: 100%; height: 100%;
      margin: 0px; padding: 30px;

      background-color: #fff;
      border-radius: 8px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1 1 100%;

      position: relative;

      overflow: hidden;

      -webkit-box-shadow: 0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025);
      box-shadow: 0 13px 27px -5px rgba(50,50,93,.25), 0 8px 16px -8px rgba(0,0,0,.3), 0 -6px 16px -6px rgba(0,0,0,.025);
      -webkit-transition-property: color,background-color,-webkit-box-shadow,-webkit-transform;
      transition-property: color,background-color,-webkit-box-shadow,-webkit-transform;
      transition-property: color,background-color,box-shadow,transform;
      transition-property: color,background-color,box-shadow,transform,-webkit-box-shadow,-webkit-transform;
      -webkit-transition-duration: .15s;
      transition-duration: .15s;

      text-decoration-color: $project-text-color;

      &:after {
        content: "";
        display: block;

        height: 100%; width: 100%;

        position: absolute;
        top: 0; left: 0;
      }

      &:hover {
        text-decoration: none;

        &:after {
          background: rgba($dark-purple, .2);
        }

        .all-project-icon {
          font-size: 54px;
          @include bp(md) { font-size: 68px; }
          @include bp(lg) { font-size: 88px; }
        }

        .all-project-name {
          font-size: 28px;
        }
      }
    }

    &-icon {
      height: 90%;
      align-self: center;
      font-size: 48px;
      @include bp(md) { font-size: 60px; }
      @include bp(lg) { font-size: 72px; }

      color: $project-icon-color;
    }

    &-name {
      font-family: $content; font-size: 24px;
      color: $project-text-color;
      text-align: right;

      align-self: flex-end;
    }
	}
}

</style>
