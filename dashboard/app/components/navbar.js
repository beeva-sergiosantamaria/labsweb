let Navbar = Vue.component("navbar-component", {
	template:	`<div class="d-flex justify-content-between">
					<div class="col-auto">
						<h2>Dashboard</h2>
					</div>
					<div class="col-auto">
						<div class="row">
							<div class="col-auto">
								<img v-bind:src="user.picture" width="25" class="rounded-circle">
							</div>
							<div class="col-auto">
								<span class="d-block">{{ user.name }}</span>
								<a class="badge badge-outline-secondary my-2" v-on:click="logout">
									Logout <i class="fa fa-sign-out"></i>
								</a>
							</div>
						</div>
					</div>
				</div>`,
	data() {
		return {
			user: {},
			auth2: {},
			client_id: "263408493667-bkmerbo03rbdcdv328r95v9cl73qmimp.apps.googleusercontent.com"
		}
	},
	created() {
		gapi.load("auth2", () => {
			let client_id = this.client_id;

			this.auth2 = gapi.auth2.init({ client_id });
		});

		this.setUserInfo();
	},
	methods: { 
		logout() {
			localStorage.removeItem("user");
			Router.push("/login");
		},
		setUserInfo() {
			let userdata = localStorage.getItem("user");
			let user = (userdata) ? JSON.parse(userdata) : false;

			if (user) {
				this.user = user;
			};
		}
	}
});