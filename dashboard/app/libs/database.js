class Database {
	constructor(sdk) {
		this.config = {
			apiKey: "AIzaSyCal5JwytwBtJYw6cbkYKEA71bUt0dxfsM",
			authDomain: "beeweb-192310.firebaseapp.com",
			databaseURL: "https://beeweb-192310.firebaseio.com",
			projectId: "beeweb-192310",
			storageBucket: "",
			messagingSenderId: "263408493667"
		};

		this.database = sdk.database();
	}

	get(ref, callback) {
		let data = this.database.ref(ref).orderByKey();
		data.on("value", (res) => {
			callback(res.val());
		});
	}

	put(ref, key, data) {
		let _ref = `${ ref }/${ key }`;
		this.database.ref(_ref).set(data);
	}

	append(ref, data) {
		let table = this.database.ref(ref);

		table.push();
		table.set(data);
	}

	update(ref, key, data) {
		let _ref = `${ ref }/${ key }`;
		this.database.ref(ref).remove().then(() => {
			this.database.ref(ref).set(data);
		});
	}
}