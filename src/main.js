import Vue from "vue";
import App from "./App.vue";
import Vuelidate from "vuelidate";

Vue.config.productionTip = false;
Vue.use(Vuelidate);

Vue.filter("phone", function(input) {
  input = input.replace(/[^0-9]/g, "");
  const CODE = "+7";
  const OPERATOR = input.substr(0, 3);
  const FIRST_3 = input.substr(3, 3);
  const NEXT_2 = input.substr(6, 2);
  const LAST_2 = input.substr(8, 2);

  return `${CODE} (${OPERATOR}) ${FIRST_3} ${NEXT_2}-${LAST_2}`;
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
