<template>
	<div >
		Data
		<router-link to="/edit" class="btn">Edit</router-link>
	</div>
</template>

<script>

	export default {
		name: 'Data',

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
