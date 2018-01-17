Vue.prototype.$dataStorage =  new DataStorage();
Vue.prototype.$auth = new Auth("263408493667-bkmerbo03rbdcdv328r95v9cl73qmimp.apps.googleusercontent.com");

let app = new Vue({
	el: "#app",
	template:	`<router-view></router-view>`,
	router: Router
});