import './js/common.js';
import './css/main.css';
import './scss/main.scss';

// import Vue from 'vue';

window.Vue = require('vue')

Vue.component('example-component', require('./components/Example.vue').default)

const app = new Vue({
  el: '#app'
})