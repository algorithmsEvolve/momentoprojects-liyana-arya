import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMq from 'vue-mq'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import VueScrollTo from 'vue-scrollto'
import AOS from "aos";
import "aos/dist/aos.css";
import checkView from 'vue-check-view';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueCookie from 'vue-cookie';

const AOS_initial = new AOS.init({
  offset: 50,
  duration: 1000,
  delay: 100,
});

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

Vue.use(AOS_initial);

Vue.use(checkView);

Vue.use(VueSweetalert2);

Vue.use(VueCookie);

new Vue({
  data: {
    // declare message with an empty value
    message: ''
  },
  router,
  render: h => h(App)
}).$mount('#app')
