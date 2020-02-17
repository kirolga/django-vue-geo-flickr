import Vue from 'vue';
import 'leaflet/dist/leaflet.css';
import App from './App.vue';
import 'leaflet-draw/dist/leaflet.draw.css';
import 'leaflet-draw/dist/leaflet.draw-src.css';
import './leaflet.draw.ru.js';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

const vue = new Vue({
    el: '#app',
    render: h => h(App)
})

vue.$mount('#app');