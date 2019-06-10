<template>
	<div>
	<div>Edition</div>
	<Table/>
	<Form/>
</div>
</template>

<script >
	import Table from './Table.vue'
	import Form from './Form.vue'
	export default {
		name: "edit",
		components: {
			Table,
			Form,
		}
	}
	
</script>

<style >
	
</style>