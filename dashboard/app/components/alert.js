let Alert = Vue.component("alert-component", {
	template:	`<div class="alert fade" v-bind:class="[ { show: show }, type ]">
					{{ message }}
				</div>`,
	props: {
		timeout: {
			type: Number,
			default: 3000
		}
	},
	data() {
		return {
			show: false,
			message: "",
			type: "",
			types: [ "success", "warning", "danger" ],
		}
	},
	created() {
		EventBus.$on("alert", ({ type, message }) => {
			if (this.types.indexOf(type) !== -1) this.alert(type, message);
		});
	},
	mounted() {
		this.$el.style.position = "fixed";
		this.$el.style.display = "none";
		this.$el.style.top = 40;
		this.$el.style.right = 30;
		this.$el.style.zIndex = 100;
	},
	methods: {
		alert(type, message) {
			this.type = `alert-${ type }`;
			this.message = message;

			this.in().then(this.out);
		},
		in() {
			return new Promise((resolve) => {
				this.$el.style.display = "block";
				setTimeout(() => {
					this.show = true;
					resolve();
				}, 100);
			});
		},
		out() {
			return new Promise((resolve) => {
				setTimeout(() => {
					this.show = false;

					setTimeout(() => {
						this.$el.style.display = "none";
						resolve();
					}, 300);
				}, this.timeout);
			});
			
		}
	}
});