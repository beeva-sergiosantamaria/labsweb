let Login = Vue.component("login-component", {
	template:	`<div class="h-100 d-flex justify-content-center">
					<div class="row align-self-center">
						<div class="col-12 text-center">
							<h3>LabsWeb Dashboard</h3>
							<div class="card my-5">
								<div class="card-body">
									<button type="button" class="btn btn-primary btn-lg" v-on:click="signIn">
										Login with Google Account <i class="fa fa-lg fa-google"></i>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>`,
	methods: {
		signIn() {
			let scope = "profile email";
			let hd = "beeva.com";

			this.$auth.login((user) => {
				this.$dataStorage.set("user", user);
				Router.push("/");
			});
		}
	}
});