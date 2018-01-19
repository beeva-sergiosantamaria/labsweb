<<<<<<< HEAD
const routes = [
	{ name: "login", path: "/login", component: Login },
	{ 
		path: "/", 
		component: Main,
		children: [
			{ name: "home", path: "", component: Home },
			{ name: "tool", path: "tool", component: ToolList },
			{ name: "edit-tool", path: "tool/:id", component: ToolForm },
			{ name: "new-tool", path: "tool/new", component: ToolForm }
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