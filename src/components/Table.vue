<template>
	<table>
		<thead>
			<tr>
				<th v-for="(label, index) in labels" :key="index">{{ label }}</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(user, index) in users" :key="index+user.name+user.surname+user.phone+user.email">
				<td v-for="(value, field) in user" 
					:key="user.name+index+field"
					contenteditable="true"
					@keydown.enter.prevent="editField($event, index, field)"
				>{{ value }}</td>
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
			else {
				this.saveUsers();
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
				this.saveUsers();
			}
		},
	}
</script>

<style >
	
</style>