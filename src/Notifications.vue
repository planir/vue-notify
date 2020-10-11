<template>
	<teleport to="body">
		<transition-group name="list" tag="div" class="notifications">
			<Notification v-for="item in items" :key="item.id" :data="item" />
		</transition-group>
	</teleport>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import {emmitter} from "@/Include/emmitter";
import INotification from "@/Include/INotification";
import Notification from "@/Notification.vue";

@Options({
	components: {Notification}
})
export default class Notifications extends Vue {
	items: INotification[] = []
	counter = 1

	created() {
		emmitter.on("add", data =>this.addItem(data))
		emmitter.on("close", id => this.removeItem(id))
	}

	/**
	 * Remove notification from group.
	 * 
	 * @param {number|undefined} id
	 */
	removeItem(id: number | undefined): void {
		this.items = this.items.filter(i => i.id != id)
	}

	/**
	 * Create a new notification.
	 * 
	 * @param INotification item - Notification's data
	 */
	addItem(data: INotification): void {

		// Default values
		const item: INotification = Object.assign({
			id       : this.counter,
			title    : "",
			content  : "Default content",
			type     : "info",
			duration : 3000
		}, data);

		this.counter++;

		// Add item data to items array.
		this.items.push(item);

		setTimeout(() => this.removeItem(item.id), item.duration);
	}
}
</script>

<style lang="scss" scoped>
	.notifications {
		position: absolute;
		right: 0;
		height: 100%;
		top: 0;
		width: 300px;
		padding-right: 8px;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;

		.list-enter-active,
		.list-leave-active {
			transition: all 0.35s ease-in-out;
		}

		.list-enter-from,
		.list-leave-to {
			margin-left: 20%;
			opacity: 0;
		}
	}
</style>
