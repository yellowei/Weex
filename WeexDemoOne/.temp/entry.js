import Vue from 'vue'
import weex from 'weex-vue-render'
weex.init(Vue)
/* weex initialized here, please do not move this line */
import App from '@/vue/index.vue'
import router from './router'

/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, App));
router.push('/');

