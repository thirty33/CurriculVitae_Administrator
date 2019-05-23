<template>
	<div id="projects_main_wrapper">
		<div id="jobs_container">
			<div id="jobs_wrapper">
				<single-job
					v-for="job in jobs"
					:key="job.company_name">
				</single-job>
			</div>
		</div>
	</div>
</template>

<script>
import singleJob from './SingleProjectComponent.vue'
export default {
  data() {
		return {
			jobs: [
				{company_name: '', entry_date: '', departure_date: ''},
				{company_name: '', entry_date: '', departure_date: ''},
				{company_name: '', entry_date: '', departure_date: ''},
				{company_name: '', entry_date: '', departure_date: ''},
				{company_name: '', entry_date: '', departure_date: ''},
				{company_name: '', entry_date: '', departure_date: ''},
				{company_name: '', entry_date: '', departure_date: ''},
				{company_name: '', entry_date: '', departure_date: ''},
				{company_name: '', entry_date: '', departure_date: ''},
				{company_name: '', entry_date: '', departure_date: ''},
				{company_name: '', entry_date: '', departure_date: ''}
			]
		}
	},
	components: {
		singleJob
	}
}
</script>

<style scoped>
#jobs_container {
  background-color: grey;
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


