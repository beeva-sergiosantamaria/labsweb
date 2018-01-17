let Store = Vue.component("store-component", {
	template:	`<div class="col-9">
					<div class="table-responsive">
						<table class="table table-hover">
							<thead>
								<tr>
									<th scope="col">ID</th>
									<th scope="col">Title</th>
									<th scope="col">Tag</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="tool in tools" v-on:click="editTool( tool.id )">
									<td scope="col">{{ tool.id }}</td>
									<td scope="col">{{ tool.title }}</td>
									<td scope="col">{{ tool.tag }}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>`,
	data() {
		return {
			tools: []
		}
	},
	created() {
		this.$database.get("tools", (res) => {
			res.forEach((tool, id) => {
				tool.id = id;
				this.tools.push(tool);
			})
		});
	},
	methods: {
		editTool(id) {
			Router.push("/store/" + id);
		}
	}
});