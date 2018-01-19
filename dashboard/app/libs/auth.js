class Auth {
	constructor(sdk) {
		this.config = {
			apiKey: "AIzaSyCal5JwytwBtJYw6cbkYKEA71bUt0dxfsM",
			authDomain: "beeweb-192310.firebaseapp.com",
			databaseURL: "https://beeweb-192310.firebaseio.com",
			projectId: "beeweb-192310",
			storageBucket: "",
			messagingSenderId: "263408493667"
		};

		this.provider = new firebase.auth.GoogleAuthProvider();
		this.auth2 = sdk.auth();
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