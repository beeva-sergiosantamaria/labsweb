const routes = [
	{ path: "/", component: Main },
	{ path: "/login", component: Login }
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