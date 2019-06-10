import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		users: [
			{name: "Bob", phone: "0981111111"}
		],
	},
	getters: {
		getUsers(state) {
			return state.users
		}
	}
})

export default store;