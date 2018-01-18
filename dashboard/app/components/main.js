let Main = Vue.component("main-component", {
	template:	`<div class="container my-5">
					<navbar></navbar>
					<div class="row my-5">
						<div class="col-2">
							<sidebar></sidebar>
						</div>
						<div class="col-10">
							<router-view></router-view>
						</div>
					</div>
				</div>`,
	components: {
		"navbar": Navbar,
		"sidebar": Sidebar
	}
});