<template>
	<div id="user_information_main_container">
		<div id="user_information_wrapper">
			<div id="user_information_container">
				<information-component
				v-for="itemInformation in textsInformation"
				:key=itemInformation.title_information
				:itemInformation="itemInformation">
				</information-component>
			</div>
		</div>
	</div>
</template>

<script>
import informationComponent from './PresentationComponents/InformationComponent.vue'
export default {
	data() {
		return {

		}
	},
	computed: {
		textsInformation() {
			return this.$store.getters.getUserTextsInformation;
		}
	},
	components: {
		informationComponent
	}
}
</script>

<style scoped>
#user_information_wrapper {
	color: white;
	background-color: purple;
	height: inherit;
	position: relative;
	overflow-y:scroll;
}

#user_information_container {
	background-color: gray;
	position: absolute;
	right: 0.7em;
  left: 0.7em;
	top: 2em;
	
}

</style>


