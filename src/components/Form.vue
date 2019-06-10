<template>
	<form novalidate >
			<h3>To add user fill all fields </h3>
			<div>
				<label for="name">Name</label>
				<input type="text" name="name" id="name" v-model="name">
				<label for="surname">Surname</label>
				<input type="text" name="surname" id="surname" v-model="surname">
				<label for="phone">Phone</label>
				<input type="tel" name="phone" id="phone" v-model="phone">
				<label for="email">Email</label>
				<input type="email" name="email" id="email" v-model="email">
			</div>
			<button @click.prevent="addUser(name, surname, phone,email)"> add user</button>
		</form>
		<form>
			<textarea v-model="json"></textarea>
			<button @click.prevent="addUsers">Load JSON data</button>
		</form>
		
</template>

<script>
	export default {
		data() {
			return {
				name: '',
				surname: '',
				phone: '',
				email: '',
				json: ''
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

<style lang="scss">
	button {
		margin-top: 20px;
		padding: 5px 20px;
	}
	label {
		margin-left: 20px;
	}
</style>