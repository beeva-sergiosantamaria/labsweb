class Database {
	constructor() {
		this.config = {
			apiKey: "AIzaSyCal5JwytwBtJYw6cbkYKEA71bUt0dxfsM",
			authDomain: "beeweb-192310.firebaseapp.com",
			databaseURL: "https://beeweb-192310.firebaseio.com",
			projectId: "beeweb-192310",
			storageBucket: "",
			messagingSenderId: "263408493667"
		};

		this.sdk = firebase.initializeApp(this.config);
		this.database = this.sdk.database();
	}

	get(ref, callback) {
		let data = this.database.ref(ref).orderByKey();
		data.on("value", (res) => {
			callback(res.val());
		});
	}
}