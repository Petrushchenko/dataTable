<template>
	<table>
		<thead>
			<tr>
				<th v-for="label in labels">{{ label }}</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="user in users">
				<td v-for="field in user">{{ field }}</td>
			</tr>
		</tbody>
	</table>
</template>

<script >
	export default {
		data(){
			return {
				labels: ["name", "surname", "phone", "email"],
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
			}
		},
	}
</script>

<style >
	
</style>