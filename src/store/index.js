import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		users: [
			{name: "Bob",  surname: "Marley", phone: "0981111111", email: "bm@a.b"},
			{name: "Mikle", surname: "Jackson",phone: "0982222222",  email: "mj@a.b"}
		],
	},

	actions: {
		addUser({commit}, user) {
			commit('ADD_USER', user)
		},
		loadData({commit}, data) {
			commit('LOAD_DATA', data)
		},
		editUser({commit, state}, {index, fieldName, text}) {
			const newUser = state.users.filter( (item, i) => i === index)[0]
			newUser[fieldName] = text
			commit('EDIT_USER', {index: index, data: newUser})
		},
		deleteUser({commit}, index) {
			commit('DELETE_USER', index)
		},
		loadJson({commit}, data){
			data.forEach(user => commit('ADD_USER', user))
		}
	},

	mutations: {
		ADD_USER(state, user) {
			state.users.push(user) 
		},
		LOAD_DATA(state, data) {
			state.users = data
		},
		EDIT_USER(state, payload) {
			state.users.splice(payload.index, 1, payload.data)
		},
		DELETE_USER(state, index) {
			state.users = state.users.filter( (item, i) => i !== index )
		}
	},

	getters: {
		getUsers(state) {
			return state.users
		},
	}
})

export default store;