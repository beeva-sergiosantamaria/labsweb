let Main = Vue.component("main-component", {
	template:	`<div class="container my-5">
					<navbar></navbar>
					<div class="row my-5">
						<sidebar></sidebar>
						<router-view></router-view>
					</div>
				</div>`,
	components: {
		"navbar": Navbar,
		"sidebar": Sidebar
	}
});