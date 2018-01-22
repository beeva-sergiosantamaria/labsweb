let app = new Vue({
	el: "#app",
	template:	`<section>
					<alert></alert>
					<transition name="fade">
						<router-view></router-view>
					</transition>
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

		Vue.filter('capitalize', (value) => {
			if (!value) return "";
			
			value = value.toString();
			return value.charAt(0).toUpperCase() + value.slice(1);
		});
	}
});