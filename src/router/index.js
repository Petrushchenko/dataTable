import Vue from 'vue'
import VueRouter from 'vue-router'

import Data from '../components/Data'
import Edit from '../components/Edit'

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [{
		path: '/',
		component: Data,
	}, {
		path: '/edit',
		component: Edit
	}]
})

export default router