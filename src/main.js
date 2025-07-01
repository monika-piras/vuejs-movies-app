import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import { BootstrapVue,BIcon, BIconChevronLeft, BIconChevronRight,BIconPlus,BIconSearch,BIconPlayFill} from 'bootstrap-vue';

import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.component('BIcon', BIcon);
Vue.component('BIconChevronLeft', BIconChevronLeft);
Vue.component('BIconChevronRight', BIconChevronRight);
Vue.component('BIconPlus', BIconPlus);
Vue.component('BIconSearch', BIconSearch);
Vue.component('BIconPlayFill', BIconPlayFill);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
