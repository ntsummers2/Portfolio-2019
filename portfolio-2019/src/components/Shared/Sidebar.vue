<template>
  <div class="Sidebar">
    <h5> Project Details </h5>
    <div class="Sidebar-Timeframe">
      <div class="Sidebar-Timeframe-Icon">
        <font-awesome-icon :icon="['far', 'clock']"/>
      </div>
      <div class="Sidebar-Timeframe-Times">
        <p> {{ project.startDate }} </p>
        <p> {{ project.endDate }} </p>
      </div>
    </div>
    <ul class="Sidebar-Role" v-for="tech in project.tech" :key="tech">
      <li> {{ tech }} </li>
    </ul>

    <ul class="Sidebar-Role" v-for="role in project.role" :key="role">
      <li> {{ role }} </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
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


.Sidebar {
  height: 100%; width: 100%;

  padding: 15px; margin: 0;

  h5 {
    font-family: $heading; font-style: normal; font-weight: 300; font-size: 1.2em;
    letter-spacing: normal;
    line-height: normal;
    text-transform: none;

    color: #333;

    border-bottom: 2px solid #ececec;

    text-align: left;

    padding: 0 0 10px 0; margin: 0;
  }
}

</style>