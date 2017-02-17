import 'src/css/common.scss'
import Vue from 'vue'
import router from 'src/router'

import App from 'components/App.vue'

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})


