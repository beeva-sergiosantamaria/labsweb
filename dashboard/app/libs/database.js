class Database {
	constructor(sdk) {
		this.database = sdk.database();
	}

	get(ref, callback, error) {
		this.database.ref(ref)
			.once("value", 
				(res) => {
					callback(res.val());
				},
				(err) => {
					error(err);
				}
			);
	}

	put(ref, key, data, callback, error) {
		let _ref = `${ ref }/${ key }`;
		this.database.ref(_ref)
			.set(data)
			.then(callback)
			.catch(error);
	}

	append(ref, data, callback, error) {
		let table = this.database.ref(ref);

		let newChild = table.push();
		newChild.set(data)
			.then(callback)
			.catch(error);
	}

	update(ref, key, data, callback, error) {
		let _ref = `${ ref }${ key }`;
		this.database.ref(ref)
			.remove()
			.then(() => {
				this.database.ref(ref)
					.push()
					.set(data)
					.then(callback)
					.catch(error);
			})
			.catch(error);
	}

	remove(ref, callback, error) {
		this.database.ref(ref)
			.remove()
			.then(callback)
			.catch(error);
	}
}