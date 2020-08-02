import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    weakCount: 0,
    strongCount: 0,
    activeUnit: null,
  },
  mutations: {
    updateProperty(state, payload) {
      const { name, value } = payload;
      state[name] = value;
    },
  },
});

new Vue({
  store: store,
  render: (h) => h(App),
}).$mount("#app");
