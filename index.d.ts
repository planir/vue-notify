import {App} from "vue";
import INotification from "./src/Include/INotification"

declare class VueNotify {
    static install: (app: App) => void;
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
      $notify: (data: INotification ) => void
    }

    interface App {
      notify: (data: INotification) => void
    }
}

export default VueNotify;