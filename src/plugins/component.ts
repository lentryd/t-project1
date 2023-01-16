import { App } from "vue";

import Header from "@/components/Header.vue";
import Parallax from "@/components/Parallax.vue";

export default {
  install(app: App) {
    app.component("Header", Header).component("Parallax", Parallax);
  },
};

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    Header: typeof Header;
    Parallax: typeof Parallax;
  }
}
