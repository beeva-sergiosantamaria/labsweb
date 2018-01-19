let ToolList = Vue.component("tools-list-component", {
	template:	`<div class="card">
					<div class="card-body pw-0 pb-2">
						<div class="row justify-content-between mb-3">
							<div class="col-auto">
								<h4 class="card-title">Tools</h4>
							</div>
							<div class="col-auto">
								<router-link to="/tools/new" tag="button" type="button" class="btn btn-primary btn-pill btn-sm">
									Add new tool
									<i class="fa fa-plus"></i>
								</router-link>
							</div>
						</div>

						<div class="table-responsive">
							<table class="table table-hover">
								<thead>
									<tr>
										<th scope="col">ID</th>
										<th scope="col">Title</th>
										<th scope="col">Tag</th>
										<th scope="col">Actions</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="tool in tools">
										<td scope="col">{{ tool.id }}</td>
										<td scope="col">{{ tool.title }}</td>
										<td scope="col">{{ tool.tag }}</td>
										<td scope="col">
											<router-link class="badge badge-pill badge-light" v-bind:to="{ name: 'edit-tool', params: { id: tool.id } }">
												Edit
												<i class="fa fa-pencil-square-o"></i>
											</router-link>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>`,
	data() {
		return {
			tools: []
		}
	},
	created() {
		this.$database.get("tool", (res) => {
			res.forEach((tool, id) => {
				tool.id = id;
				this.tool.push(tool);
			})
		});
	}
});