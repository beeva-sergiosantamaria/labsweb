class Auth {
	constructor(sdk) {
		this.provider = new firebase.auth.GoogleAuthProvider();
		this.auth2 = sdk.auth();
	}

	currentUser() {
		return this.auth2.currentUser;
	}

	login(callback, error) {
		this.auth2.signInWithPopup(this.provider)
			.then((response) => {
				let profile = response.user;
				let credential = response.credential;

				callback({
					credential,
					id: profile.uid,
					name: profile.displayName,
					email: profile.email,
					picture: profile.photoURL
				});
			})
			.catch(error);
	}

	logout(callback, error) {
		this.auth2.signOut()
			.then(callback)
			.catch(error);
	}
}