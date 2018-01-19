let app = new Vue({
	el: "#app",
	template:	`<section>
					<alert></alert>
					<router-view></router-view>
				</section>`,
	router: Router,
	components: {
		"alert": Alert
	},
	data() {
		return {
			config: {
				apiKey: "AIzaSyCal5JwytwBtJYw6cbkYKEA71bUt0dxfsM",
				authDomain: "beeweb-192310.firebaseapp.com",
				databaseURL: "https://beeweb-192310.firebaseio.com",
				projectId: "beeweb-192310",
				storageBucket: "",
				messagingSenderId: "263408493667"
			}
		}
	},
	created() {
		let sdk = firebase.initializeApp(this.config)

		Vue.prototype.$auth = new Auth(sdk);
		Vue.prototype.$storage = new Storage();
		Vue.prototype.$database = new Database(sdk);	
	}
});