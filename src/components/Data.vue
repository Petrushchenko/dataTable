<template>
	<div >
		
		<router-link to="/edit" class="btn">Edit</router-link>
		<table>
			<thead>
				<tr>
					<th v-for="label in labels">{{ label }}</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="user in users">
					<td>{{ user.name }}</td>
					<td>{{ user.phone }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>

	export default {
		name: 'Data',
		data(){
			return {
				labels: ["name", "phone"],
				users: this.$store.getters.getUsers
			}
		}

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.btn {
		text-decoration: none;
		border: 1px solid #f3f3f3;
		padding: 10px 20px;
		border-radius: 5px;
	}

</style>
