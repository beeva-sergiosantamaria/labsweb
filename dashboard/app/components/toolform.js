let ToolForm = Vue.component("toolform-component", {
	template:	`<div class="card">
					<form class="m-0">
						<div class="card-body">
							<h4 class="cart-title">Tool form</h4>
							<p class="card-text">Required information</p>
							<div class="row">
								<div class="col">
									<div class="form-group">
										<label for="title">
											<i class="fa fa-cog"></i>
											Title
										</label>
										<input id="title" type="text" class="form-control" v-model="tool.title" placeholder="Tool title or name">
									</div>
								</div>
								<div class="col">
									<div class="form-group">                                           
										<label for="tags">
											<i class="fa fa-tag"></i>
											Tags
										</label>
										<select id="tags" class="form-control" v-model="tool.tag">
											<option v-for="tag in tags" v-bind:value="tag.value">{{ tag.text }}</option>
										</select>
									</div>
								</div>  
							</div>  

							<div class="row">
								<div class="col">
									<div class="form-group">
										<label for="description">
											<i class="fa fa-align-left"></i>
											Description
										</label>
										<textarea id="description" class="form-control" v-model="tool.description" placeholder="Short description to introduce tool applications..."></textarea>
									</div>
								</div>
								<div class="col">
									<div class="form-group">                                            
										<label for="status">
											<i class="fa fa-thermometer-full"></i>
											Status
										</label>
										<select id="status" class="form-control" v-model="tool.status">
											<option v-for="techno in technologyStates" v-bind:value="techno.value">{{ techno.text }}</option>
										</select>
									</div>
								</div>
							</div>

							<div class="form-group">
								<label for="links">
									<i class="fa fa-thermometer-full"></i>
									Links
								</label>
								<textarea id="links" class="form-control" v-model="tool.links" placeholder="Link to resources like documentation, related articles,..."></textarea>
							</div>
						</div>

						<div class="card-footer">
							<p class="card-text">Optional information</p>
							<div class="form-group">					
								<label for="demo">
									<i class="fa fa-film"></i>
									Demo
								</label>
								<textarea id="demos" class="form-control" v-model="tool.demo" placeholder="Links to tool demostrations or experiments results and conclusions."></textarea>
							</div>
							<div class="form-group">
								<label for="graphic">
									<i class="fa fa-bar-chart"></i>
									Graphic material
								</label>
								<textarea id="graphic" class="form-control" v-model="tool.graphic" placeholder="Graphic resources like infographics, presentations,..."></textarea>
							</div>
							<div class="form-group">											
								<label for="firststeps">
									<i class="fa fa-list-ol"></i>
									First steps
								</label>
								<textarea class="form-control" v-model="tool.firststeps" placeholder="Simple steps to start simple project or experiment..."></textarea>
							</div>
								
							<button type="button" class="btn btn-pill btn-primary btn-block mt-5 mb-4" v-on:click="sendInfo">
								<i class="fa fa-floppy-o mr-2"></i>
								Save
							</button>
						</div>
					</form>
				</div>`,
	data(){
		return{
			user: {},
			toolKey: "",
			tool: {
				title: "",
				description: "",
				links: "",
				demo: "",
				graphic: "",
				firststeps: "",
				tag: "",
				status:""
			},
			tags: [
				{ text: "Frontend", value: "frontend" },
				{ text: "Backend", value: "backend" },
				{ text: "Mobile", value: "mobile" },
				{ text: "Big Data", value: "bigdata" },
				{ text: "IoT", value: "iot" },
				{ text: "Cloud", value: "cloud" },
				{ text: "DevOps", value: "devops" },
				{ text: "Security", value: "security" },
				{ text: "Blockchain", value: "blockchain" },
				{ text: "DevOps", value: "devops" },
				{ text: "Human-Computer Interfaces", value: "hci" }
			],
			technologyStates: [
				{ text: "Adopt", value: "adopt" },
				{ text: "Transfer", value: "transfer" },
				{ text: "Core", value: "core" }
			]
		}
	},
	created() {
		if (this.$route.params.id && typeof this.$route.params.id === "number") {
			let table = `tools/${ this.$route.params.id }`;
			this.toolKey = this.$route.params.id;
			this.$database.get(table, (res) => {
				if (res) {
					Object.entries(res).forEach(([key, value])=>{
						this.tool[key] = value;
					});
				} else {

				}
			});
		}
	},
	methods: {
		sendInfo() {
			if (this.toolKey === "new") {
				this.$database.append('tools/', this.tool, console.log, 1);
			} else {
				this.$database.update('tools/', this.toolKey, this.tool, console.log, console.error);
			}
			Router.push({ name: "tools" });

		},
		validateInfo() {

		}
	}
});