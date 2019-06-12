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
			<h3>Past on this field your json data and click the button</h3>
			<div class="textarea-wrapper">
				<textarea v-model="jsonData"></textarea>
				<button @click.prevent="addUsers">Load JSON data</button>
			</div>
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
				jsonData: ''
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
			},
			addUsers() {
				const data = JSON.parse(this.jsonData)
				this.$store.dispatch('loadJson', data)
				this.jsonData = ''
			}
		}
	}
</script>

<style lang="scss" scoped>
	h3 {
		margin-top: 40px;
	}
	.textarea-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		textarea {
			width: 80%;
			min-height: 100px;
		}
	}
	button {
		margin-top: 20px;
		padding: 5px 20px;
	}
	label {
		margin-left: 20px;
	}
	input {
		margin-top: 20px;
	}
</style>