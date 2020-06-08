import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import {BootstrapVueIcons} from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'	

import App from './App.vue'


Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
