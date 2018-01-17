const routes = [
	{ path: "/login", component: Login },
	{ 
		path: "/", 
		component: Main,
		children: [
			{ path: "store", component: Store },
			{ path: "store/:id", component: StoreForm },
			{ path: "store/new", component: StoreForm }
		]
	},
]

const Router = new VueRouter({ routes });

Router.beforeEach((to, from, next) => {
	const $storage = new Storage();

	let user = $storage.get("user");
	if (!user && to.path !== "/login") {
		Router.push("/login");
	} else if (user && to.path === "/login") {

	} else {
		next();
	}
});