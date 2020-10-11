<template>
	<div :class="['notification', data.type]" @click="close">
		<span class="title" v-text="data.title"/>
        <div class="content"  v-text="data.content"/>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import {emmitter} from "@/Include/emmitter";
import INotification from './Include/INotification';

class Props {
    data!: INotification;
}

export default class Notification extends Vue.props(Props) {
    close(){
        emmitter.emit("close", this.data.id)
    }
}
</script>

<style lang="scss">
    .notification {
        padding: 10px 6px;
        margin-bottom: 10px;
        font-family: sans-serif;
        background: grey;
        color: white;
        border: 1px solid rgba(0,0,0,.05);
        border-left: 4px solid rgba(0,0,0,.2);
        border-radius: 3px;

        > .title {
            font-size: 15px;
            font-weight: 600;
        }

        > .content {
            font-size: 13px;
            margin-top: 4px;
        }

        &.info {
            background-color: #1976d2;
        }

        &.success {
            background-color: #43a047;
        }

        &.warning {
            background-color: #fb8c00;
        }

        &.error {
            background-color: #f44336;
        }
    }
</style>
