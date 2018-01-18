const routes = [
	{ name: "login", path: "/login", component: Login },
	{ 
		name: "home",
		path: "/", 
		component: Main,
		children: [
			{ name: "tools", path: "tools", component: ToolsList },
			{ name: "edit-tool", path: "tools/:id", component: StoreForm },
			{ name: "new-tool", path: "tools/new", component: StoreForm }
		]
	},
	{ name: "notfound", path: "404", component: NotFound },
	{ name: "default", path: "*", redirect: '/404' }
]

const Router = new VueRouter({ routes });

Router.beforeEach((to, from, next) => {
	const $storage = new Storage();

	let user = $storage.get("user");
	if (!user && to.path !== "/login") {
		Router.push("login");
	} else if (user && to.path === "/login") {
		Router.go(-1);
	} else {
		next();
	}
});