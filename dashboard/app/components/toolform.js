let ToolForm = Vue.component("toolform-component", {
    template:	`<div>
					<form>
					    <div class="form-group">
						    <label>Description: </label>
						    <textarea type="text" class="form-control" v-model="tool.description" placeholder="edit me"></textarea>
					    </div>
					    <div class="form-group">
						    <label>Links: </label>
						    <textarea type="text" class="form-control" v-model="tool.links" placeholder="edit me"></textarea>
						</div>
					    <div class="form-group">					
    						<label>Demo: </label>
						    <textarea type="text" class="form-control" v-model="tool.demo" placeholder="edit me"></textarea>
					    </div>
					    <div class="form-group">					
    						<label>Graphic material: </label>
    						<textarea type="text" class="form-control" v-model="tool.graphic" placeholder="edit me"></textarea>
					    </div>
					    <div class="form-group">											
						    <label>First steps: </label>
						    <textarea type="text" class="form-control" v-model="tool.firststeps" placeholder="edit me"></textarea>
					    </div>
						
					    <div class="form-group">											
						    <label>Tags: </label>
						    <select class="custom-select" v-model="tool.selected">
  							    <option v-for="tag in tags" v-bind:value="tag.value">{{ tag.text }}</option>
						    </select>
					    </div>
					    
					    <div class="form-group">											
						    <label>State: </label>
						    <select class="custom-select" v-model="tool.technoState">
  							    <option v-for="techno in technologyStates" v-bind:value="techno.value">{{ techno.text }}</option>
						    </select>
					    </div>
						    <button type="button" class="btn btn-primary" v-on:click="sendInfo">Send</button>

					</form>
				</div>
				`,
    data(){
        return{
            user: {},
            toolKey: "",
            tool: {
                description: "",
                links: "",
                demo: "",
                graphic: "",
                firststeps: "",
                tags: "",
                tagexp: "",
                selected: "",
                technoState:""
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
    created(){
        let table = `tools/${ this.$route.params.id }`;
        this.toolKey = this.$route.params.id;
        this.$database.get(table, (res) => {
            Object.entries(res).forEach(([key, value])=>{
                this.tool[key] = value;
            });
        });


    },
    methods: {
        sendInfo() {
            if (this.toolKey === "new") {
                this.$database.append('tools/', this.tool, console.log, 1);
            }else{
                this.$database.update('tools/', this.toolKey, this.tool, console.log, 1);
            }
            Router.push({ name: "tools" });

        },
        validateInfo() {

        }
    }
});