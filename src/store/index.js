import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		users: [
			{name: "Bob", phone: "0981111111", surname: "Marley", email: "bm@a.b"},
			{name: "Mikle", phone: "0982222222", surname: "Jackson", email: "mj@a.b"}
		],
	},

	actions: {
		addUser({commit}, user) {
			commit('ADD_USER', user)
		},
		loadData({commit}, data) {
			console.log(data);
			return commit('LOAD_DATA', data)
		}
	},

	mutations: {
		ADD_USER(state, user) {
			state.users.push(user) 
		},
		LOAD_DATA(state, data) {
			state.users = data
		}
	},

	getters: {
		getUsers(state) {
			return state.users
		},
	}
})

export default store;