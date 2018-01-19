let Navbar = Vue.component("navbar-component", {
	template:	`<div class="d-flex justify-content-between align-items-center">
					<div class="col-auto">
						<img class="d-inline-block" height="50" src="assets/img/logo.png"/>
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
		let user = this.$storage.get("user");
		if (user) this.user = user;
	},
	methods: { 
		logout() {
			this.$auth.logout(
				() => {
					this.$storage.remove("user");
					EventBus.$emit("alert", { type: "success", message: "Bye!" });
					Router.push("login");
				},
				(err) => {
					console.error(err);
					EventBus.$emit("alert", { type: "danger", message: "Error logging out. More details on console!" });
				}
			);
		}
	}
});