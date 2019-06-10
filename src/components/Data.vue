<template>
	<div >
		<router-link to="/edit" class="btn">Add user</router-link>
		<Table/>
	</div>
</template>

<script>
	import Table from './Table.vue'

	export default {
		name: 'Data',
		components: {
			Table,
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
