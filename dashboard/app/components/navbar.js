let Navbar = Vue.component("navbar-component", {
	template:	`<div class="d-flex justify-content-between">
					<div class="col-auto">
						<h2>Dashboard</h2>
					</div>
					<div class="col-auto">
						<div class="container-fluid">
							<div class="row">
								<div class="col-auto">
									<img v-bind:src="user.picture" width="60" class="rounded-circle mr-3">
								</div>
								<div class="col-auto">
									<span class="d-block">{{ user.name }}</span>
									<a class="badge badge-outline-secondary my-2" v-on:click="logout">
										Logout <i class="fa fa-sign-out"></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>`,
	data() {
		return {
			user: {}
		}
	},
	created() {
		this.setUserInfo();
	},
	methods: { 
		logout() {
			this.$dataStorage.remove("user");
			Router.push("/login");
		},
		setUserInfo() {
			let user = this.$dataStorage.get("user");

			if (user) {
				this.user = user;
			};
		}
	}
});