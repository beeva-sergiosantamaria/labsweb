let Sidebar = Vue.component("sidebar-component", {
	template:	`<aside class="col-3 my-5">
					<div>
						<h5>Store</h5>
						<ul class="nav flex-column">
							<li class="nav-item">
								<a class="nav-link" href="#">New</a>
							</li>
							<li class="nav-item">
								<a class="nav-link active" href="#">List</a>
							</li>
						</ul>
					</div>
				</aside>`,
});