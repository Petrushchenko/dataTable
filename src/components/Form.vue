<template>
	<form novalidate >
			<h3>To add user fill all fields </h3>
			<label for="name">Name</label>
			<input type="text" name="name" id="name" v-model="name">
			<label for="surname">Surname</label>
			<input type="text" name="surname" id="surname" v-model="surname">
			<label for="phone">Phone</label>
			<input type="tel" name="phone" id="phone" v-model="phone">
			<label for="email">Email</label>
			<input type="email" name="email" id="email" v-model="email">
			<button v-on:click.prevent="addUser(name, surname, phone,email)"> add</button>
		</form>
		
</template>

<script>
	export default {
		data() {
			return {
				name: '',
				surname: '',
				phone: '',
				email: ''
			}
		},
		methods: {
			addUser(name, surname, phone, email) {
				if (name === '' || surname === '' || phone === '' || email === '') {
					return
				}
				this.$store.dispatch('addUser', { name, surname, phone, email })
				this.name = ''
				this.surname = ''
				this.phone = ''
				this.email = ''
			}
		}
	}
</script>

<style>
	
</style>