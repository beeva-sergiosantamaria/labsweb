const routes = [
	{ name: "login", path: "/login", component: Login },
	{ 
		path: "/", 
		component: Main,
		children: [
			{ name: "home", path: "", component: Home },
			{ name: "tools", path: "tools", component: ToolList },
			{ name: "edit-tool", path: "tools/:id", component: ToolForm },
			{ name: "new-tool", path: "tools/new", component: ToolForm }
		]
	},
	{ name: "notfound", path: "404", component: NotFound }
]

const Router = new VueRouter({ routes });

Router.beforeEach((to, from, next) => {
	const $storage = new Storage();

	let user = $storage.get("user");
	if (!user && to.path !== "/login") {
		next("login");
	} else {
		next();
	}
});