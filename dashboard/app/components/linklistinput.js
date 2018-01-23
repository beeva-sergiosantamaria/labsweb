let LinkListInput = Vue.component("link-list-input-component", {
	template: 	`<div class="my-4">
					<label>
						<i class="fa fa-link"></i>
						Links
					</label>
					<p class="card-text pl-4 text-muted" v-if="!internalLinks.length">No links added.</p>
					<ul>
						<li v-for="link in internalLinks">
							<a :href="link.url" target="_blank">
								<i class="fa fa-external-link mr-2"></i>
								{{ link.title }}
							</a>
							<span class="text-danger mx-5" v-on:click="removeLink(link)">
								<i class="fa fa-trash-o mr-2"></i>
							</span>
						</li>
					</ul>
					<div class="pl-4">
						<label>New Link</label>
						<div class="row pl-4">
							<div class="col-5">
								<div class="form-group">
									<input type="text" v-model="newLink.title" class="form-control" placeholder="Link title">
								</div>
							</div>

							<div class="col-5">
								<div class="form-group">
									<input type="text" v-model="newLink.url" class="form-control" placeholder="Link url">
								</div>
							</div>
							<div class="col-2">
								<button type="button" class="btn btn-pill btn-outline-primary" v-on:click="addLink">Add</button>
							</div>
						</div>
					</div>
				</div>`,
	props: {
		links: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			newLink: {},
			internalLinks: []
		}
	},
	watch: {
		links(value) {
			this.internalLinks = value;
		},
		internalLinks: {
			handler(value) {
				this.$emit("change", value);
			}
		}
	},
	methods: {
		addLink() {
			if (this.newLink) {
				this.internalLinks.push(this.newLink);
				this.newLink = {};
			}
		},
		removeLink(link) {
			let index = this.internalLinks.indexOf(link);
			this.internalLinks.splice(index, 1);
		}
	}
});