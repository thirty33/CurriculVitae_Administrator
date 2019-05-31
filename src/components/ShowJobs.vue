<template>
	<div id="projects_main_wrapper">
		<div id="jobs_container">
			<div id="jobs_wrapper">
				<single-job
					v-for="job in jobs"
					:key="job.key"
					:job="job">
				</single-job>
			</div>
		</div>
	</div>
</template>

<script>
import singleJob from './SingleJobComponent.vue'
export default {
  data() {
		return {
		}
	},
	computed: {
		jobs() {
			return this.$store.getters.getUserJobs;
		}
	},
	components: {
		singleJob
	}
}
</script>

<style scoped>
#jobs_container {
  background-color: #a1ba89;
  height: inherit;
  position: relative;
  overflow-y:scroll;
}

#jobs_wrapper {
  position: absolute;
  right: 0.7em;
  left: 0.7em;
  top: 2em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 0.3em;
}
</style>


