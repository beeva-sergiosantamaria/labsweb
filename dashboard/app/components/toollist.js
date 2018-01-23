let ToolList = Vue.component("tools-list-component", {
	template:	`<div class="card">
					<div class="card-body pw-0 pb-2">
						<div class="row justify-content-between mb-3 px-3">
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

						<div class="input-group with-addon-icon-right my-5">
							<input type="text" class="form-control" placeholder="Search..." v-model="query" @input="filterTools">
							<span class="input-group-addon">
								<i class="fa fa-search"></i>
							</span>
						</div>

						<p v-if="tools.length == 0" class="card-text">No tools stored on database. Create one now!</p>
						<div class="table-responsive" v-if="tools.length">
							<table class="table">
								<thead>
									<tr>
										<th scope="col"><i class="mr-2 fa fa-cog"></i> Title</th>
										<th scope="col"><i class="mr-2 fa fa-tag"></i> Tag</th>
										<th scope="col"><i class="mr-2 fa fa-thermometer-full"></i> Status</th>
										<th scope="col"><i class="mr-2 fa fa-wrench"></i> Actions</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="tool in tools">
										<td scope="row">{{ tool.title }}</td>
										<td>{{ tool.tag | capitalize  }}</td>
										<td>{{ tool.status | capitalize  }}</td>
										<td>
											<router-link tag="button" class="btn btn-outline-primary btn-pill btn-sm py-1" v-bind:to="{ name: 'edit-tool', params: { id: tool.id } }">
												Edit
												<i class="fa fa-pencil-square-o"></i>
											</router-link>
											<button class="btn btn-outline-danger btn-pill btn-sm py-1" v-on:click="deleteTool(tool)">
												Delete
												<i class="fa fa-trash"></i>
											</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>`,
	data() {
		return {
			tools: [],
			query: null
		}
	},
	created() {
		this.syncTools();	
	},
	methods: {
		filterTools() {
			let q = this.query.toLowerCase();
			this.syncTools(q);	
		},
		syncTools(query) {
			this.$database.get("tools", 
				(values) => {
					if (values) {
						this.tools = [];

						Object.keys(values).forEach((id) => {
							let tool = values[id];
							tool.id = id;

							if (!query || query && tool.title.toLowerCase().includes(query)) {
								this.tools.push(tool);
							}
						});
					}
				},
				(err) => {
					EventBus.$emit("alert", { type: "danger", message: "Error synchronizing tools. Check console for more details" });
					console.error(err);
				}
			);
		},
		deleteTool(tool) {
			if (tool) {
				let ref = `tools/${ tool.id }`;
				this.$database.remove(ref, 
					() => {
						this.syncTools();
					},
					(err) => {
						EventBus.$emit("alert", { type: "danger", message: "Error deleting tool. Check console for more details" });
						console.error(err);
					}
				);
			}

        }
	}
});