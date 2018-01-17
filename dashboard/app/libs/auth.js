class Auth {
	constructor(client_id, scope) {
		this.client_id = client_id;
		this.scope = scope || "profile email";

		gapi.load("auth2", () => {
			this.auth2 = gapi.auth2.init({ client_id });
		});
	}

	login(success, error) {
		this.auth2.signIn({ scope: this.scope })
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

				success(user);
			})
			.then(error);
	}

	logout() {

	}
}