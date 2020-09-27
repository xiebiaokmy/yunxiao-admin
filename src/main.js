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
Vue.use(VueQuillEditor)
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')