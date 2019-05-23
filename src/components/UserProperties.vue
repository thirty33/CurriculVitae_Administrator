<template>
	<div id="user_information_main_container">
		<div id="user_information_wrapper">
			<div id="user_information_container">
				<information-component
				v-for="itemInformation in texts_information"
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
			texts_information: [
				{ title_information: 'Estudios', items_information: [
					{ text: '5to semestre Ing. (ULA VE)' },
					{ text: 'Desarrollo web (Platzi)' },
					{ text: 'Redes Cisco (Cisco Academy)' }
				]},
				{ title_information: 'Conocimientos', items_information: [
					{ text: 'Maquetacion (html, css, js)' },
					{ text: 'Arquitectura MVC, MVVM' },
					{ text: 'API REST' },
					{ text: 'MYSQL' },
					{ text: 'POSTGRESQL' },
				]},
				{ title_information: 'Habilidades adicionales', items_information: [
					{ text: 'Diseno servicios (SWAGGER)' },
					{ text: 'Organizacion de tareas (TRELLO)' },
					{ text: 'Manejo de tiempo (Pomodoro technique)' }
				]},
				{ title_information: 'Lenguajes', items_information: [
					{ text: 'Javascript' },
					{ text: 'C#' },
					{ text: 'PHP' },
					{ text: 'C++' }
				]},
				{ title_information: 'Frameworks', items_information: [
					{ text: 'Vue.js' },
					{ text: 'Xamarin Forms' },
					{ text: '.Net Core' }
				]}
			]
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


