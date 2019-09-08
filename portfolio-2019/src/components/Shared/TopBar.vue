<template>
  <div class="Topbar">
    <div class="Topbar-Timeframe">
      <p> <span> <font-awesome-icon :icon="['far', 'clock']"/> </span> <span>{{ project.startDate }} </span> - <span> {{ project.endDate }} </span></p>
    </div>
    <div class="Topbar-Tech">
      <span> <font-awesome-icon :icon="['fas', 'cloud']"/> </span>
      <ul>
        <li v-for="tech in project.tech" :key="tech"> {{ tech }} </li>
      </ul>
    </div>
    <div class="Topbar-Tech">
      <span> <font-awesome-icon :icon="['fas', 'user-tag']"/> </span>
      <ul>
        <li v-for="role in project.role" :key="role"> {{ role }} </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
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


.Topbar {
  height: 100%; width: 100%;

  padding: 15px 15px 0 20px; margin: 0;

  border-bottom: 2px solid #8AB0AB;

  &-Timeframe {
    font-family: $content; font-style: normal; font-weight: 200; font-size: 1em;
    letter-spacing: normal;
    line-height: 1.2;
    color: #333;

    p {
      margin: 0 0 15px 0; padding: 0;
    }

    svg {
      margin-right: 18px;
    }
  }

  &-Tech {
    display: grid;
    grid-template-columns: 30px auto;
    grid-template-rows: 1fr;

    padding: 0; margin: 0 0 15px 0;
    
    ul {
      list-style-type: none;

      padding: 0; margin: 0;

      li {
        float: none;
        @include bp(sm) { float: left; }
        
        padding: 0 10px 0 0; margin: 0;
        
        font-family: $content; font-style: normal; font-weight: 200; font-size: 1em;
        letter-spacing: normal;
        line-height: 1.2;
        color: #333;

        &:before {

          @include bp(sm) {
            border-left: 1px solid currentColor;
          
            content: "";
            display: inline-block;
            
            height: 1.1em; width: 4px;
            
            margin: 0 .1em; padding: 0;
            vertical-align: middle;
          }
        }

        &:first-child {
          &:before {
            border-left: 0;
            
            margin: 0; padding: 0;
            width: 0; height: 0;
          }
        }
      }

      clear: both;
    }
    svg {
      margin-right: 20px;
    }
  }

  &-Role {
    svg {
      margin-right: 20px;
    }
  }

}

</style>