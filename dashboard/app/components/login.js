let Login = Vue.component("login-component", {
	template:	`<div class="container">
					<div class="h-100 d-flex justify-content-center">
						<div class="row align-self-center justify-content-center">
							<div class="col-5 text-center">
								<div class="card my-5">
									<div class="card-header">
										<img class="w-75" src="assets/img/logo.png"/>
									</div>
									<div class="card-body">
										<h5 class="card-title">LabsWeb Dashboard</h5>
										<p class="card-text">Manage all resources of LabsWeb.</p>
										<button type="button" class="btn btn-primary btn-pill" v-on:click="signIn">
											Login with <i class="fa fa-lg fa-google"></i>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>`,
	methods: {
		signIn() {
			this.$auth.login(
				(user) => {
					this.$database.get("users", 
						(res) => {
							if (Object.keys(res).indexOf(user.id) !== -1) {
								this.$storage.set("user", user);
								Router.push({ name: "home" });
							} else {
								EventBus.$emit("alert", { type: "danger", message: "User no registered" });
							}
						},
						(err) => {
							console.error(err);
							EventBus.$emit("alert", { type: "danger", message: "Error getting users. Check console for more details" })
						}
					);
				},
				(err) => {
					console.error(err);
					EventBus.$emit("alert", { type: "danger", message: "Error validating user data. Check console for more details" });
				}
			);
		}
	}
});