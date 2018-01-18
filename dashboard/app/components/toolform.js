let ToolForm = Vue.component("storeform-component", {
    template:	`<div>
					<form>
						<p>Description: </p>
						<textarea type="text" class="form-control" v-model="tools.description" placeholder="edit me"></textarea>
						<p>Links: </p>
						<textarea type="text" class="form-control" v-model="tools.links" placeholder="edit me"></textarea>
						<p>Demo: </p>
						<textarea type="text" class="form-control" v-model="tools.demo" placeholder="edit me"></textarea>
						<p>Graphic material: </p>
						<textarea type="text" class="form-control" v-model="tools.graphic" placeholder="edit me"></textarea>
						<p>First steps: </p>
						<textarea type="text" class="form-control" v-model="tools.firststeps" placeholder="edit me"></textarea>
						<p>Tags: </p>
						<select class="custom-select" v-model="selected">
  							<option v-for="tag in tags" v-bind:value="tag.value">{{ tag.text }}</option>
						</select>
						<p>State: </p>
						<select class="custom-select" v-model="selected">
  							<option v-for="techno in technologyStates" v-bind:value="techno.value">{{ techno.text }}</option>
						</select>
						<button type="button" class="btn btn-primary" v-on:click="sendInfo">Send</button>
					</form>
				</div>
				`,
    data(){
        return{
            user: {},
            tools: {"description": "",
                "links": "",
                "demo": "",
                "graphic": "",
                "firststeps": "",
                "tags": "",
                "tagexp": ""
            },
            tags:[
                {"text": "Frontend", "value": "frontend"},
                {"text": "Backend", "value": "backend"},
                {"text": "Mobile", "value": "mobile"},
                {"text": "Big Data", "value": "bigdata"},
                {"text": "IoT", "value": "iot"},
                {"text": "Cloud", "value": "cloud"},
                {"text": "DevOps", "value": "devops"},
                {"text": "Security", "value": "security"},
                {"text": "Blockchain", "value": "blockchain"},
                {"text": "DevOps", "value": "devops"},
                {"text": "Human-Computer Interfaces", "value": "hci"}
            ],
            technologyStates:  [
                {"text": "Adopt", "value": "Adopt"},
                {"text": "Transfer", "value": "Transfer"},
                {"text": "Core", "value": "core"},

            ]
        }
    },
    created(){
    },
    methods:{
        sendInfo(){
            console.log(this.tools.description)
        }
        ,
        validateInfo(){

        }
    }

});