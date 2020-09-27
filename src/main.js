import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import md5 from "js-md5";
Vue.prototype.$md5 = md5;
import {
  post
} from './utils/http'
Vue.use(VueQuillEditor)
Vue.use(ElementUI);
Vue.prototype.$post = post;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')