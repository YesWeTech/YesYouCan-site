import Vue from 'vue'
import App from './App.vue'
import CustomExample from './components/custom-example/custom-example.vue';

Vue.component('custom-example', CustomExample);

new Vue({
  CustomExample,
  el: '#app',
  render: h => h(App)
})
