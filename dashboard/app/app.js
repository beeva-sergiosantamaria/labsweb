Vue.prototype.$auth = new Auth("263408493667-bkmerbo03rbdcdv328r95v9cl73qmimp.apps.googleusercontent.com");
Vue.prototype.$storage = new Storage();
Vue.prototype.$database = new Database();

let app = new Vue({
	el: "#app",
	template:	`<router-view></router-view>`,
	router: Router
});