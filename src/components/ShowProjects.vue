<template>
  <div id="projects_main_wrapper">
    <div id="projects_container">
      <div id="projects_wrapper">
        <single-project
          v-for="project in projects"
          :key="project.id"
          :project="project">
        </single-project>
      </div>
    </div>
  </div>
</template>

<script>
import singleProject from './SingleProjectComponent.vue'
export default {
  data() {
    return {

    }
  },
  computed: {
    projects() {
      return this.$store.getters.getUserProjects;
    }
  },
  components: {
    singleProject
  }
}
</script>

<style>
#projects_main_wrapper {
  /* position: relative !important; */
}

#projects_container {
  background-color: #a1ba89;
  height: inherit;
  position: relative;
  overflow-y:scroll;
}

#projects_wrapper {
  position: absolute;
  right: 0.7em;
  left: 0.7em;
  top: 2em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 0.3em;

}
</style>


