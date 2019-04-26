import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Vuelidate from 'vuelidate';
import App from './App.vue'
import translations from "./resources/translations";

Vue.use(VueI18n);
Vue.use(Vuelidate);

Vue.config.formApiUrl = process.env.FORM_API_URL;

new Vue({
    el: '#app',
    data: {
        policy: '50',
        options: [
          { text: '50,000', value: '50' },
          { text: '100,000', value: '100' },
          { text: '250,000', value: '250' },
          { text: '500,000', value: '500' }
        ]
      }
  })