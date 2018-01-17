let Main = Vue.component("main-component", {
	template:	`<div class="container my-5">
					<navbar></navbar>
					<div class="row">
						<sidebar></sidebar>
						<router-view></router-view>
					</div>
				</div>`,
	components: {
		"navbar": Navbar,
		"sidebar": Sidebar
	}
});