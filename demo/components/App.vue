<template>
	<notifications />
  <div class="buttons">
    <a href="#" :class="type" v-text="type" v-for="type in types" :key="type" @click="test(type)" />
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class App extends Vue {

	types: string[] = ["success", "warning", "info", "error"]

	test(type = 'info'){
		this.$notify({
			type,
			title: type + " alert",
			content: "this is a "+type+" alert test.",
			duration: 5 *1000
		});
	}	
}
</script>

<style lang="scss" scoped>
	$success: #4caf50;
	$error: #e53935;
	$info: #1e88e5;
	$warning: #ff9800;

	.buttons {
		display: flex;

		> a {
			font-family: Arial;
			margin-right: 8px;
			text-decoration: none;
			outline: 0;
			padding: 8px 14px;
			background: darkgrey;
			color: white;
			border-radius: 6px;
			border-bottom: 1px solid grey;

			&.success {
				background-color: $success;
			}


			&.warning {
				background-color: $warning;
			}

			&.error {
				background-color: $error;
			}

			&.info {
				background-color: $info;
			}
		}
	}
</style>
