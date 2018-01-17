let Sidebar = Vue.component("sidebar-component", {
	template:	`<aside class="col-3">
					<div>
						<h5>Store</h5>
						<ul class="nav flex-column">
							<li class="nav-item">
								<router-link class="nav-link" to="/store/new">New</router-link>
							</li>
							<li class="nav-item">
								<router-link class="nav-link" to="/store">List</router-link>
							</li>
						</ul>
					</div>
				</aside>`,
});