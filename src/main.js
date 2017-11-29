import Vue from 'vue'
import App from './App'
import router from './router'

window.addEventListener('load', () => {
  window.task = new TaskCard();
});


Vue.config.productionTip = false
class TaskCard { 
  constructor() {
    new Vue({
      el: '#app',
      router,
      template: '<App/>',
      components: { App }
    });
  }
}
