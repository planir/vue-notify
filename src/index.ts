import {App} from "vue";
import Notifications from "@/Notifications.vue";
import {emmitter} from "@/Include/emmitter";
import INotification from './Include/INotification';

// plugins/i18n.js
export default {
    install: (app: App): void => {

        /**
         * Emit the event to start a notification.
         * 
         * @param INotification data 
         */
        const $notify = (data: INotification) => emmitter.emit('add', data);

        app.component("notifications", Notifications);

        app.config.globalProperties.$notify = $notify;
    }
  }