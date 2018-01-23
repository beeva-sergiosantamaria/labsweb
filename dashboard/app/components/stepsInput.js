let StepsInput = Vue.component("steps-input-component", {
	template: 	`<div class="my-4">
					<label>
						<i v-bind:class="iconClass"></i>
						{{ title }}
					</label>
					<p class="card-text pl-4 text-muted" v-if="!internalSteps.length">No step found.</p>
					<ul class="list-group list-group-flush my-3" v-if="internalSteps.length">
						<li class="list-group-item" v-for="step in sortedSteps()">
							<span class="mr-3">{{ step.order }}</span>
							{{ step.content }}
							<span class="text-danger mx-5" v-on:click="removeStep(step)">
								<i class="fa fa-trash-o mr-2"></i>
							</span>
						</li>
					</ul>

					<div class="pl-4">
						<label>New step</label>
						<div class="row pl-4">
							<div class="col-2">
								<div class="form-group">
									<input type="number" v-model="newStep.order" class="form-control" placeholder="Order">
								</div>
							</div>

							<div class="col-8">
								<div class="form-group">
									<input type="text" v-model="newStep.content" class="form-control" placeholder="Content">
								</div>
							</div>
							<div class="col-2">
								<button type="button" class="btn btn-pill btn-outline-primary" v-on:click="addStep">Add</button>
							</div>
						</div>
					</div>
				</div>`,
	props: {
		steps: {
			type: Array,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		iconClass: {
			type: String,
			required: false,
			default: "fa fa-link"
		}
	},
	data() {
		return {
			newStep: {},
			internalSteps: []
		}
	},
	watch: {
		steps(value) {
			this.internalLinks = value;
		},
		internalSteps(value) {
			this.$emit("change", value);
		}
	},
	methods: {
		addStep() {
			if (this.newStep) {
				this.internalSteps.push(this.newStep);
				this.newStep = {};
			}
		},
		removeStep(step) {
			let index = this.internalSteps.indexOf(step);
			this.internalSteps.splice(index, 1);
		},
		sortedSteps() {
			let steps = this.internalSteps.slice();
			return steps.sort((a, b) => a.order - b.order);
		}
	}
});