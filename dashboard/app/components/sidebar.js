let Sidebar = Vue.component("sidebar-component", {
	template:	`<aside class="card">
					<div class="card-body px-0 py-2">
						<div class="d-block item">
							<router-link tag="span" class="nav-link" to="/">
								<i class="fa fa-home" aria-hidden="true"></i> Home
							</router-link>
						</div>
						<div class="d-block item">
							<router-link tag="span" class="nav-link" to="/tools">
								<i class="fa fa-cog" aria-hidden="true"></i> Tools
							</router-link>
						</div>
					</div>
				</aside>`,
});