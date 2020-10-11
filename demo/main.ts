import { createApp } from "vue";
import VueNotify from "./../src";
import App from "./components/App.vue";

const app = createApp(App);

app.use(VueNotify);
app.mount("#app");
