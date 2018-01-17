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
	let user = localStorage.getItem("user");
	let signed = Boolean(user) && (user !== null);

	if (!signed && to.path !== "/login") {
		Router.push("/login");
	} else {
		next();
	}
});