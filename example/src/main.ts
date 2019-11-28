import Vue from 'vue';
import App from './App.vue';
import router from './router';
import StarsUI from '../../src/index';

Vue.use(StarsUI);
// Vue.use(StarsUI.gobal);
// Vue.use(StarsUI.local);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
