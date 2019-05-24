import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const testingTextsInformation = [
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

const testingProjects = [
	{ name: '', photo_url: '', description: ''},
	{ name: '', photo_url: '', description: ''},
	{ name: '', photo_url: '', description: ''},
	{ name: '', photo_url: '', description: ''},
	{ name: '', photo_url: '', description: ''},
	{ name: '', photo_url: '', description: ''},
	{ name: '', photo_url: '', description: ''},
	{ name: '', photo_url: '', description: ''},
	{ name: '', photo_url: '', description: ''},
	{ name: '', photo_url: '', description: ''},
	{ name: '', photo_url: '', description: ''},
	{ name: '', photo_url: '', description: ''},
	{ name: '', photo_url: '', description: ''},
	{ name: '', photo_url: '', description: ''},
	{ name: '', photo_url: '', description: ''},
	{ name: '', photo_url: '', description: ''},
	{ name: '', photo_url: '', description: ''}
]

const testingJobs = [
	{company_name: '', company_photo: '', entry_date: '', departure_date: ''},
	{company_name: '', company_photo: '', entry_date: '', departure_date: ''},
	{company_name: '', company_photo: '', entry_date: '', departure_date: ''},
	{company_name: '', company_photo: '', entry_date: '', departure_date: ''}
]

export const store = new Vuex.Store({
	state: {
		loadingModalIsVisible: true,
		showActivityIndicator: true,
		showResponseErrors: false,
		responseErrors: null,
		texts_information: null,
		projects: null,
		jobs: null
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
			return state.texts_information;
		},
		getUserJobs : state => {
			return state.texts_information;
		},
		getActivityIndicatorStatus: state => {
			return state.showActivityIndicator;
		},
		getResponseErrors: state => {
			return state.responseErrors;
		}
	}
})