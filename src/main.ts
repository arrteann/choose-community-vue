import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueLottiePlayer from "vue-lottie-player";

Vue.use(VueLottiePlayer);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
