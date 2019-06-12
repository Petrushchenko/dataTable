<template>
	<table>
		<caption>To edit any data in this table click on cell, type correct text and then press "enter" key on your keyboard</caption>
		<thead>
			<tr>
				<th v-for="(label, index) in labels" :key="index">{{ label }}</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(user, index) in users" :key="index+user.name+user.surname+user.phone+user.email">
				<td v-for="(value, field) in user" 
					:key="user.name+index+field"
					contenteditable="true"
					@keydown.enter.prevent="editField($event, index, field)"
				>{{ value }}</td>
				<td><button type="button" @click="deleteUser(index)">DELETE</button></td>
			</tr>
		</tbody>
	</table>
</template>

<script >

	export default {
		data(){
			return {
				labels: ["name", "surname", "phone", "email"],
				newText: ''
			}
		},
		computed: {
			users () {
				this.data = this.$store.getters.getUsers
				this.saveUsers();
				return this.data
			}
		},
		created () {
			// localStorage.removeItem('users')
			if (localStorage.getItem('users')) {
				let data = JSON.parse(localStorage.getItem('users'));
				this.$store.dispatch('loadData', data)
			} 
		},
		methods : {
			saveUsers() {
				const parsed = JSON.stringify(this.data);
				localStorage.setItem('users', parsed);
			},
			editField(e, index, fieldName) {
				this.newText = e.target.innerText
				const text = this.newText;
				this.$store.dispatch('editUser', {index, fieldName, text })
			},
			deleteUser(index) {
				this.$store.dispatch('deleteUser', index)
			}
		},
	}
</script>

<style lang="scss" scoped>
	table {
		margin: 20px auto;
		width:  80%;
		border: 2px solid #f4d5a3;
		border-collapse: collapse;
		td, th {
			padding: 5px;
			border: 1px solid #f4d5a3;
		}
	}
</style>