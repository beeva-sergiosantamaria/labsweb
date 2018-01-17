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
	data() {
		return {
			client_id: "263408493667-bkmerbo03rbdcdv328r95v9cl73qmimp.apps.googleusercontent.com",
			auth2: null
		}
	},
	created() {
		gapi.load("auth2", () => {
			let client_id = this.client_id;

			this.auth2 = gapi.auth2.init({ client_id });
		});
	},
	methods: {
		signIn() {
			let scope = "profile email";
			let hd = "beeva.com";

			this.auth2.signIn({ scope, hd })
				.then((response) => {
					let profile = response.getBasicProfile();
					let authorization = response.getAuthResponse();

					let user = {
						authorization,
						id: profile.getId(),
						name: profile.getGivenName(),
						email: profile.getEmail(),
						picture: profile.getImageUrl(),
					};

					localStorage.setItem("user", JSON.stringify(user));
					Router.push("/");
				});
		}
	}
});