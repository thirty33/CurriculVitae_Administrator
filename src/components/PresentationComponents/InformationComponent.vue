<template>
    <div id="information_wrapper">
			<div id="information_title_container">
				<h2 id="information_title">{{ itemInformation.title_information }}</h2>
			</div>
			<div id="information_items_container">
				<h4 id="information_item" class="item1"
					v-for="item_information in itemInformation.items_information"
					:key="item_information.text">
						{{ item_information.text }}
				</h4>
			</div>
		</div>
</template>

<script>
export default {
	props: ['itemInformation'],
	data() {
		return {

		}
	}
}
</script>

<style scoped>
#information_wrapper {
	background-color: aqua;
	display: grid;
	grid-template-rows: 1fr 3fr;
	grid-gap: 0;
}

#information_title_container {
	background-color: #a1ba89;
	/* opacity: 0.3; */
	grid-row: 1;
	font-size: 1.2em;
}

#information_items_container {
	background-color: #92bda3;
	/* opacity: 0.3; */
	grid-row: 2;
	display: grid;
	grid-gap: 0;
	grid-template-rows: repeat(3, 1fr);
	grid-template-columns: 1fr 1fr;
	font-size: 1.2em;
}

#information_title_container,
#information_items_container {
	text-align: center;
}
</style>


