<template>
    <div id="main_div_presentation">
      <div id="presentation_foto">
				<user-image
					:photo_url="user_information.photo_url">
				</user-image>
			</div>
      <div id="presentation_description">
				<description-text
					:textDescription="user_information.description">
				</description-text>
			</div>
      <div id="presentation_social_networks">
				<user-social-networks
					:userNetworks="user_information.technologies">
				</user-social-networks>
			</div>
    </div>
</template>

<script>
import UserImage from './PresentationComponents/ImagePresentation.vue'
import DescriptionText from './PresentationComponents/TextDescriptionPresentation.vue'
import UserSocialNetworks from './PresentationComponents/UserNetworks.vue'

export default {
	data() {
		return {
			user_information: {
				photo_url: 'avatar.png',
				description: 'DEVELOPER / POSTGRESQL, .NET CORE, XAMARIN FORMS, VUE.JS, CSS-GRID',
				technologies: [
					{ name: 'twitter', url: 'https://twitter.com/HiramArch', network_icon: 'twitter.png'},
					{ name: 'github', url: 'https://github.com/thirty33', network_icon: 'github.png'},
					{ name: 'linkedin', url: 'https://www.linkedin.com/in/joel-developer21/', network_icon: 'linkedin.png'}
				]
			}
		}
	},
	components: {
		UserImage,
		DescriptionText,
		UserSocialNetworks
	}
}
</script>

<style scoped>

#main_div_presentation {
  width: inherit;
  height: inherit;
  color: white;
  background-color: #806d40;
  display: grid;
  grid-gap: 0;
  grid-template-rows: 1fr 8fr 3fr 2fr 1fr;
  grid-template-columns: 1fr 12fr 1fr;
}

#presentation_foto {
  background-color: #382633;
	border-radius: 0.3em 0.3em 0 0;
  grid-row: 2;
  grid-column: 2;
	position:relative;
}

#presentation_description {
  background-color: #92bda3;
  grid-row: 3;
  grid-column: 2;
}

#presentation_social_networks {
  background-color: #a5cc6b;
		border-radius: 0 0 0.3em 0.3em;
  grid-row: 4;
  grid-column: 2;
}


/* Keyframes */
@media (max-width: 1000px) {

	#main_div_presentation {
		grid-template-rows: 1fr 1fr;
		grid-template-columns: 1fr 1fr;
	}

	#presentation_foto {
		grid-row: span 2;
		grid-column: 1;
	}	

	#presentation_description {
		grid-row: 1;
		grid-column: 2;
		display: grid;
		align-items: center;
		align-content: center;
	}

	#presentation_social_networks {
		grid-row: 2;
		grid-column: 2;
		display: grid;
		grid-template-rows: 0.3fr 1fr;
	}
}

@media (max-width: 540px) {
	#presentation_social_networks {
		grid-template-rows: 0.1fr 1fr;
	}
}


</style>

