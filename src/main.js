// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import Layout from './layout.vue'
import ElementUI from 'element-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyload from 'vue-lazyload'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueLazyload,{
    loading:require('./assets/logo.png'),
    error:require('./assets/logo.png')

})
Vue.use(VueAwesomeSwiper, /* { default global options } */)
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { Layout },
    template: '<Layout/>'
})
