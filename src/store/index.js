import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		loadingModalIsVisible: true
	},
	mutations: {
		showLoadingModal(state, payload) {
			state.loadingModalIsVisible = payload;
		}
	},
	actions: {
		changeLoadingModalStateAsync(context, payload) {
			setTimeout(() => {
				context.commit('showLoadingModal', payload);
			}, 6000);
		}
	},
	getters: {
		getLoadingModalState : state => {
			return state.loadingModalIsVisible;
		}
	}
})