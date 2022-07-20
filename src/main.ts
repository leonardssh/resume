import "./assets/css/fonts.css";
import "./style.css";

import { ViteSSG } from "vite-ssg/single-page";
import App from "./App.vue";

export const createApp = ViteSSG(App);
