import VueRouter from 'vue-router';
export default new VueRouter({
	mode:'hash',
	routes: [
		{
			path:'/',
			name:'Hello',
			template: 'HelloWorld'
		}
	]
})