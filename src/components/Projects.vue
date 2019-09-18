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
          <div class="all-project-background">
            <img
              src="https://cdn.stocksnap.io/img-thumbs/960w/SKI2T9YF2P.jpg"
              alt="leafs"
            />
          </div>
          <div class="all-project-shadow">
            <img
              src="https://cdn.stocksnap.io/img-thumbs/960w/SKI2T9YF2P.jpg"
              alt="leafs"
            />
          </div>
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
          name: 'MSU iOS App',
          url: 'https://msu.app',
          img: '',
          alt: ''
        },
        {
          name: 'MSU Android App',
          url: 'https://msu.app',
          img: '',
          alt: ''
        },
        {
          name: 'Search',
          url: 'https://search.msu.edu',
          img: '',
          alt: ''
        },
        {
          name: 'Maps',
          url: 'https://maps.msu.edu',
          img: '',
          alt: ''
        },
        {
          name: 'Qualtrics',
          url: 'https://qualtrics.msu.edu',
          img: '',
          alt: ''
        },
        {
          name: 'USearch',
          url: 'https://usearch.msu.edu',
          img: '',
          alt: ''
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
  padding: 20px; margin: 0 auto;
  @include bp(md) { padding: 20px 40px; }

  max-width: $max-width;

	&-header {
		margin: 0 auto; padding: 40px 0;

    font-family: $heading;
    font-size: 32px;
    @include bp(sm) { font-size: 32px; }
    @include bp(md) { font-size: 48px; }
		letter-spacing: 0;
    color: $project-header;
    text-align: left;
	}

  &-projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 3rem;
    grid-auto-rows: minmax(300px, auto);
    margin: 0 auto;
  }

	&-project {
    max-width: 500px;
    width: 100%; height: 250px;
    padding: 3rem 2rem; margin: 0 auto;
    position: relative; 

    &:hover {
      text-decoration: none;
      transform: scale(1.02);
    }

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
    }

    &-name {
      font-family: $content;
      font-size: 32px;
      color: #fff;
    }

    &-background {
      position: absolute;
      top: 0; right: 0; bottom: 0; left: 0;
      
      border-radius: 20px;
      
      overflow: hidden;
      z-index: -1;

      img {
        width: 100%;
        object-fit: cover;
        vertical-align: middle;
      }
    }

    &-shadow {
      width: 90%; height: 100%;
      display: flex;
      
      position: absolute;
      bottom: -15px; left: 50%;

      border-radius: 20px;

      filter: blur(15px);
      transform: translate(-50%, 0);
      z-index: -2;
      overflow: hidden;

      img {
        margin-top: 3rem;
        object-fit: cover;
      }
    }
	}
}

</style>
