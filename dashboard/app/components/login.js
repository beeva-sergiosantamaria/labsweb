let Login = Vue.component("login-component", {
	template:	`<div class="h-100 d-flex justify-content-center">
					<div class="row align-self-center justify-content-center">
						<div class="col-5 text-center">
							<div class="card my-5">
								<div class="card-header">
									<img class="w-75" src="assets/img/logo.png"/>
								</div>
								<div class="card-body">
									<h5 class="card-title">LabsWeb Dashboard</h5>
									<p class="card-text">Manage all resources of LabsWeb.</p>
									<button type="button" class="btn btn-primary" v-on:click="signIn">
										Login with <i class="fa fa-lg fa-google"></i>
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
				this.$storage.set("user", user);
				Router.push({ name: "home" });
			});
		}
	}
});