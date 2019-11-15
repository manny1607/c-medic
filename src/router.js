import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const router = new VueRouter({
	// mode:'hash',
	routes: [
		{
			path:'/',
			name:'Login',
			component: require('./views/Login.vue').default
			// component: require('./components/HelloWorld.vue').default
		},
		{
			path:'/hello',
			name:'Hello',
			component: require('./components/HelloWorld.vue').default
		}
	]
})

export default router;