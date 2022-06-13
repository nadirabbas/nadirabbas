import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/main.scss";
import "@/assets/tailwind.css";
import mitt from "mitt";

export const app = createApp(App);

app.config.globalProperties.emitter = mitt();

app.mount("#app");
