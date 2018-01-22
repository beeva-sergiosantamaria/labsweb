let NotFound = Vue.component("notfound-component", {
	template:	`<div class="container my-5">
					<navbar></navbar>
					<div class="row my-5">
						<div class="col-2">
							<sidebar></sidebar>
						</div>
						<div class="col-10">
							<div class="jumbotron">
								<h2 class="display-8">Ops! Something was wrong</h2>
								<p class="lead">The page you have requested has not been found :(</p>
							</div>
						</div>
					</div>
				</div>`,
	components: {
		"navbar": Navbar,
		"sidebar": Sidebar
	}
});