 /* jshint esversion: 6 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 全部引入element-ui
import ElementUI from 'element-ui';

// element-ui的引入样式文件
import 'element-ui/lib/theme-chalk/index.css';

// 引入echarts柱形图图表
import myCharts from './common/myCharts';
Vue.use(myCharts);

import echarts from 'echarts';//++引入echarts模块，并且全局注册
Vue.prototype.$echarts = echarts;//++

// 引入路由守卫
import install from './common/guard';
Vue.use(install);


Vue.config.productionTip = false;

// 全局配置element-ui
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
