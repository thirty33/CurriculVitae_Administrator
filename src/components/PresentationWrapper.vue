<template>
    <div id="main_div_presentation">
      <div id="presentation_foto">
				<user-image
					:photo_url="user_information.photo_url">

				</user-image>
			</div>
      <div id="presentation_description"></div>
      <div id="presentation_social_networks"></div>
    </div>
</template>

<script>
import UserImage from './PresentationComponents/ImagePresentation.vue'
export default {
	data() {
		return {
			user_information: {
				photo_url: 'avatar.png',
				description: '',
				technologies: [
					{ name: 'twitter', url: '', network_icon: ''},
					{ name: 'github', url: '', network_icon: ''},
					{ name: 'linkedn', url: '', network_icon: ''},
				]
			}
		}
	},
	components: {
		UserImage
	}
}
</script>

<style scoped>

#main_div_presentation {
  width: inherit;
  height: inherit;
  color: white;
  background-color: peru;
  display: grid;
  grid-gap: 0;
  grid-template-rows: 1fr 8fr 3fr 2fr 1fr;
  grid-template-columns: 1fr 12fr 1fr;
}

#presentation_foto {
  background-color: purple;
  grid-row: 2;
  grid-column: 2;
	position:relative;
}

#presentation_description {
  background-color: aqua;
  grid-row: 3;
  grid-column: 2;
}

#presentation_social_networks {
  background-color: pink;
  grid-row: 4;
  grid-column: 2;
}

</style>

