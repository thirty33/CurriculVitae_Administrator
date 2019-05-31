import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const testingTextsInformation = [
	{ title_information: 'Estudios', items_information: [
		{ text: '5to semestre Ing. de Sistemas' },
		{ text: 'Desarrollo web en academias virtuales (Platzi, Udemy, etc)' },
		{ text: 'Redes Cisco (Cisco Academy)' }
	]},
	{ title_information: 'Conocimientos', items_information: [
		{ text: 'Maquetacion web (css-grid, flexbox, responsive desing, jquery)' },
		{ text: 'Arquitectura MVC, MVVM, REST API, Patrones de diseno' },
		{ text: 'Manejo de Servicios (Postman)' },
		{ text: 'Bases de datos (MYSQL, POSTGRESQL)' },
		{ text: 'Control de Versiones (Git)' }
	]},
	{ title_information: 'Habilidades adicionales', items_information: [
		{ text: 'Diseno servicios (SWAGGER)' },
		{ text: 'Organizacion de tareas (TRELLO)' },
		{ text: 'Manejo de tiempo (Pomodoro technique)' },
		{ text: 'Diseno de interfaces basico (Figma)' },
	]},
	{ title_information: 'Lenguajes', items_information: [
		{ text: 'Javascript' },
		{ text: 'C#' },
		{ text: 'PHP' },
		{ text: 'C++' },
		{ text: 'Python' },
	]},
	{ title_information: 'Frameworks', items_information: [
		{ text: 'Vue.js' },
		{ text: 'Xamarin Forms' },
		{ text: '.Net Core' },
		{ text: '.Firebase' },
		{ text: 'Bootstrap' },
		{ text: 'Foundation' },
	]}
]

const testingProjects = [
	{ name: '10sSalud', item_url: 'https://github.com/thirty33/10sSalud.git', photo_url: '10sSalud.png', description: 'Proyecto del sector Salud, PHP POSTGRESQL'},
	{ name: 'Bingo75App', item_url: '', photo_url: 'Bingo75.png', description: 'Juego para Aplicaciones Moviles. Xamarin forms, .Net Framework, MySql'},
	{ name: 'CV Administrator', item_url: 'https://github.com/thirty33/Projects_Development_Api', photo_url: 'nophoto.png', description: 'Administrador de Proyectos. Vuejs, .Net Core 2.2, PostgreSql'},
	{ name: 'JetSet App', item_url: 'https://github.com/thirty33/Vuejs-Firebase', photo_url: 'nophoto.png', description: 'Proyecto para manejo de Operaciones de Agencia de Viajes. Vuejs, FireBase'}
]

const testingJobs = [
	{company_name: '10s SAS', company_photo: '10sSas.png', entryDate: '15/03/2018', departureDate: '15/05/2019', position: 'Developer' },
	{company_name: 'Jet Set Viajes y turismo', company_photo: 'jetset.png', entryDate: '15/08/2019', departureDate: '15/01/2019', position: 'Developer' },
]

export const store = new Vuex.Store({
	state: {
		loadingModalIsVisible: false,
		showActivityIndicator: true,
		showResponseErrors: false,
		responseErrors: null,
		texts_information: testingTextsInformation,
		projects: testingProjects,
		jobs: testingJobs
	},
	mutations: {
		//Open and close modal
		showLoadingModal(state, payload) {
			state.loadingModalIsVisible = payload;
		},
		// Show ActivityIndicator in modal
		showLoadingIndicator(state, payload) {
			state.showActivityIndicator = payload;
		},
		//Set response errors from API.
		setResponseErrors(state, payload) {
			state.responseErrors = payload;
		},
		loadTextsInformation(state, payload) {
			state.texts_information = payload;
		},
		loadProjects(state, payload) {
			state.projects = payload;
		},
		loadJobs(state, payload) {
			state.jobs = payload;
		}
	},
	actions: {
		changeLoadingModalStateAsync(context, payload) {
			setTimeout(() => {
				context.commit('showLoadingIndicator', payload);
				// context.commit('loadTextsInformation', testingTextsInformation);
				// context.commit('loadProjects', testingProjects);
				// context.commit('loadJobs', testingJobs);
				context.commit('setResponseErrors', 'Server error, try again');
			},2000);
		},
		loadDataFromServiceAsync(context) {
			fetch('https://localhost:44364/user/getprojectsbyid/1')
				.then(function(response) {
					return response.json();
				})
				.then(function(myJson) {

					const projects = [];
					const objProjects = myJson['model'];
					console.log(objProjects);
					for (let key in objProjects) {
						projects.push({
							id: objProjects[key].id,
							name: objProjects[key].name,
							creationDate: (objProjects[key].creationDate).slice(0,-9),
							description: objProjects[key].description,
							photo_url: objProjects[key].photo 
						})
					}
					context.commit('loadProjects', projects);
				});	
		}
	},
	getters: {
		getLoadingModalState : state => {
			return state.loadingModalIsVisible;
		},
		getUserTextsInformation : state => {
			return state.texts_information;
		},
		getUserProjects : state => {
			return state.projects;
		},
		getUserJobs : state => {
			return state.jobs;
		},
		getActivityIndicatorStatus: state => {
			return state.showActivityIndicator;
		},
		getResponseErrors: state => {
			return state.responseErrors;
		}
	}
})