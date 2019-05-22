<template>
	<div id="user_networks_main_div">
		<user-link
			id="user_networks_item"
			v-for="technology in userNetworks"
			:key=technology.key 
			:technology="technology">
		</user-link>
	</div>
</template>

<script>
import UserLink from './UserLinkImage.vue'
export default {
	props: ['userNetworks'],
	data() {
		return {

		}
	},
	components: {
		UserLink
	}
}
</script>

<style scoped>
#user_networks_main_div {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
}

#user_networks_item {
	display: grid;
	margin: 0.4em 0 0 0;
	justify-content: center;
	justify-items: center;
}
</style>

