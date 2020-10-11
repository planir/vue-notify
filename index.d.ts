import {Plugin} from "vue";
import INotification from "./src/Include/INotification"

declare class VueNotify {
    static install: Plugin;
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
      $notify: (data: INotification ) => void
    }
}

export default VueNotify;