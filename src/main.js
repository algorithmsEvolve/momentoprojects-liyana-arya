import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMq from 'vue-mq'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import VueScrollTo from 'vue-scrollto'

Vue.config.productionTip = false
Vue.use(VueMq, {
  breakpoints: {
    mobile: 900,
    desktop: Infinity,
  }
});

Vue.use(Viewer, {
  defaultOptions: {
    button: true,
    navbar: true,
    title: false,
    toolbar: true,
    tooltip: true,
    movable: true,
    zoomable: true,
    rotatable: false,
    scalable: false,
    transition: true,
    fullscreen: false,
    keyboard: true,
  }
});

Vue.use(VueScrollTo, {
  duration: 800,
  easing: "ease",
});

new Vue({
  data: {
    // declare message with an empty value
    message: ''
  },
  router,
  render: h => h(App)
}).$mount('#app')
